import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Openings from './Openings';

class Card extends Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    cardData: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      cardInfo: {},
      cardPhotoURL: '',
      currentSeed: 0
    }
  }

  handleYelpIDLookup = (address) => {
    const config = {
      headers: {'Authorization': }
    }

    const splitAddress = this.props.cardData.Address.split(',')

    const address1 = splitAddress[0]
    const city = splitAddress[splitAddress.length - 2].replace(/^[ ]+|[ ]+$/g,'')

    const name = this.props.cardData.Name

    axios.get('http://localhost:5000/yelp_business_match', {params: {address1: address1, city:city, name:name}})
      .then(res => {
        const business_id = res.data.businesses[0].id
        console.log(res.data.businesses[0].id)
        axios.get('http://localhost:5000/yelp_business_detail', {params: {business_id: business_id}})
          .then(res => {
            console.log(res);
            let cardInfo = {
              isOpen: res.data.hours[0].is_open_now,
              thumbnail: res.data.image_url,
              photos: res.data.photos
              // [0],
              // imageUrl2: res.data.photos[1],
              // imageUrl3: res.data.photos[2],
            }
            this.setState({
              cardInfo: cardInfo,
              cardPhotoURL: cardInfo.thumbnail
            })
            console.log(this.state.cardInfo);
          })
          .catch(err => {
            console.log(err.message);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.handleYelpIDLookup(this.props.cardData.Address);
  }

  handleShuffleImage = () => {
    let randomSeed = Math.floor(Math.random() * 3);
    if (this.state.currentSeed === randomSeed) {
      if (randomSeed === 2) {
        randomSeed = 0;
      } else if (randomSeed === 0) {
        randomSeed = 1;
      } else {
        randomSeed = 2;
      }
    };
    this.setState({
      cardPhotoURL: this.state.cardInfo.photos[randomSeed],
      currentSeed: randomSeed
    })
  }

  render() {
    return (
      <li class='ramen-card'>
        <div class='ramen-card__wrapper'>
          <div class='ramen-card__title--wrapper'>
            <div class='ramen-card__title'>
              <h3>{this.props.cardData.Name}</h3>
            </div>
            <Openings isOpening={this.state.cardInfo.isOpen}/>
          </div>
          <div class="ramen-card__image--wrapper">
            <div class="ramen-card__image" style={{ backgroundImage: `url(${this.state.cardPhotoURL})` }}>
              {/* <img src={this.state.cardPhotoURL} alt={this.props.cardData.Name} /> */}
            </div>
            <button class='ramen-card__button' onClick={this.handleShuffleImage}>Shuffle Image</button>
          </div>
        </div>
      </li>
    )
  }
}

export default Card
