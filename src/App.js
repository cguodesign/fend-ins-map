import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';
import MapContainer from './Mapcontainer';
import Dropdown from './Dropdown';

class App extends Component {
  state = {
    rawData:[
       {
         "Name": "Nakamura",
         "Address": "172 Delancey St, New York, NY 10002"
       },
       {
         "Name": "Ivan Ramen ",
         "Address": "25 Clinton St, New York, NY 10002"
       },
       {
         "Name": "Mu Ramen ",
         "Address": "12-09 Jackson Ave, Long Island City, NY 11101"
       },
       {
         "Name": "Ippudo",
         "Address": "65 4th Ave, New York, NY 10003"
       },
       {
         "Name": "Totto Ramen",
         "Address": "366 W 52nd St, New York, NY 10019"
       },
       {
         "Name": "Bar Moga",
         "Address": "128 W Houston St, New York, NY 10012"
       },
       {
         "Name": "Chuko",
         "Address": "565 Vanderbilt Ave, Brooklyn, NY 11238"
       },
       {
         "Name": "Ichiran",
         "Address": "374 Johnson Ave, Brooklyn, NY 11206"
       },
       {
         "Name": "Ganso",
         "Address": "25 Bond St, Brooklyn, NY 11201"
       },
       {
         "Name": "Jin Ramen",
         "Address": "3183 Broadway, New York, NY 10027"
       },
       {
         "Name": "Hanjan",
         "Address": "36 W 26th St, New York, NY 10010"
       },
       {
         "Name": "Hidechan",
         "Address": "248 E 52nd St, Fl 2, New York, NY 10022"
       },
       {
         "Name": "Momofuku Noodle Bar",
         "Address": "171 1st Avenue, New York, NY 10003"
       },
       {
         "Name": "Mokbar",
         "Address": "75 9th Ave, New York, NY 10011"
       },
       {
         "Name": "Rai Rai Ken",
         "Address": "218 E 10th St, New York, NY 10003"
       },
       {
         "Name": "Ramen Lab",
         "Address": "70 Kenmare St, New York, NY 10012"
       },
       {
         "Name": "Ramen Shack",
         "Address": "13-13 40th Ave, Long Island City, NY 11101"
       },
       {
         "Name": "ROKC",
         "Address": "3452 Broadway, New York, NY 10031"
       },
       {
         "Name": "Takashi",
         "Address": "456 Hudson St, New York, NY 10014"
       },
       {
         "Name": "Yuji Ramen",
         "Address": "150 Ainslie St, Brooklyn, NY 11211"
       }
    ],
    displayData: [],
    filterOption: 'all',
    openingInfo: '',
    mapFocus: {lat: 40.743596, lng:-73.990271},
    apiKey: ,
    loading: true,
    zoomLevel: 12,
    errorStatus: 'none',
    selectedCardName: ''
  }

  componentDidMount() {
    this.handleDataPreparation();
  }

  // Prepare the dataset
  handleDataPreparation = () => {
    let newRamens = this.state.rawData.slice();

    this.state.rawData.map((e, index) => {
      let output = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + e.Address.split(' ').join('+') + '&key=' + this.state.apiKey;

      axios.get(output)
        .then(res => {
          e.location = res.data.results[0].geometry.location;

          // Yelp api to match the address
          const splitAddress = e.Address.split(',')
          const address1 = splitAddress[0]
          const city = splitAddress[splitAddress.length - 2].replace(/^[ ]+|[ ]+$/g,'')
          const name = e.Name

          axios.get('http://localhost:5000/yelp_business_match', {params: {address1: address1, city:city, name:name}})
            .then(resYelpID => {
              const business_id = resYelpID.data.businesses[0].id

              // Yelp api to load images and opening status
              axios.get('http://localhost:5000/yelp_business_detail', {params: {business_id: business_id}})
                .then(resYelpData => {

                  e.isOpen = resYelpData.data.hours[0].is_open_now;
                  e.thumbnail = resYelpData.data.image_url;
                  e.photos = resYelpData.data.photos;

                  // Duplicate one set of data for the filter
                  newRamens[index] = e;
                  this.setState({
                    displayData: newRamens
                  })

                  // Disable the loading part if the data loading is finished.
                  if (index === this.state.rawData.length - 1) {
                    this.setState({
                      loading: false
                    })
                  }
                })
                .catch(err => {
                  console.log(err.message);
                  this.setState({
                    errorStatus: 'data'
                  })
                })
            })
            .catch(err => {
              console.log(err.message);
              this.setState({
                errorStatus: 'data'
              })
            })
        })
        .catch(err => {
          console.log(err.message);
          this.setState({
            errorStatus: 'data'
          })
        })
    })
  }

  // handle the filter actions
  handleDataScopeChange = (val) => {
    if (val !== this.state.filterOption) {
      this.resetViewPort();
      this.resetSelectedCards();
      if (val === 'all') {
        // reset the data using the previously stored data
        let restoreData = this.state.rawData
        this.setState({
          openingInfo: '',
          displayData: restoreData,
          filterOption: val
        });
      } else if (val === 'opening') {
        // only load the resturants which are currently opening
        let filterData = this.state.displayData.filter(e => e.isOpen)
        this.setState({
          openingInfo: '- Opening',
          displayData: filterData,
          filterOption: val
        })
      }
    }
  }

  handleCardSelected = (location, name) => {
    // Zoom to a detail view shows the neibourhood of the ramen place
    this.setState({
      mapFocus: location,
      zoomLevel: 15,
      selectedCardName: name
    })
  }

  resetViewPort = () => {
    // Zoom back to the overview view
    this.setState({
      mapFocus: {lat: 40.743596, lng:-73.990271},
      zoomLevel: 12
    })
  }

  resetSelectedCards = () => {
    // Remove the selected status
    let allSelectedCards = document.getElementsByClassName('ramen-card--selected');
    if (allSelectedCards.length > 0) {
      for (let card of allSelectedCards) {
        card.classList.remove('ramen-card--selected')
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className='app-title--wrapper'>
            <h1 className='app-title'>
              <a href='https://github.com/cguodesign/fend-ramen-map' target='_blank' rel="noopener noreferrer">
                NYC Ramen Map {this.state.openingInfo}
              </a>
            </h1>
          </div>
          <div className='app-dropdown__wrapper'>
            <Dropdown onSelectDataScope={this.handleDataScopeChange}/>
          </div>
        </header>
        {
          this.state.loading
            ? (
              // Display a simple message while the data is loading
              <div className='loader'>
                {
                  this.state.errorStatus === 'data'
                    ? (
                      <div>
                        <h3>Sorry, there's something wrong with the data loading, please try it later.</h3>
                        <p>You can also contact me via Udacity if this occurs again.</p>
                      </div>
                    )
                    : (
                      <div>
                        <h3>Loading...</h3>
                        <p>Due to the limitation for free API, this may take around 20 seconds.</p>
                      </div>
                    )
                }
              </div>
            )
            : (
              // Mount the Body when the loading is finished
              <div className='body'>
                <div className='map-container'>
                  {/* Load the map component*/}
                  <MapContainer
                    mapData={this.state.displayData}
                    mapFocus={this.state.mapFocus}
                    zoomLevel={this.state.zoomLevel}
                    selectedCardName={this.state.selectedCardName}/>
                </div>
                <div className='card-container'>
                  <div className='card-container--inner'>
                    {/* Display all the restaurant cards via the card component*/}
                    {this.state.displayData.map(e => {
                      return <Card
                        cardData={e}
                        isSelected={false}
                        onCardSelect={this.handleCardSelected}/>
                    })}
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
