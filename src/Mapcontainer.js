import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

export class MapContainer extends React.Component {
  static propTypes = {
    mapData: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      ramens: this.props.mapData,
      "apiKey": "AIzaSyBDI_iT48_yucAzAFmdzUKQ1tVWTomj96M"
    }
  }

  componentDidMount() {
    this.handleAddressToGeocoding();
  }

  handleAddressToGeocoding = () => {
    this.state.ramens.map((e, index) => {
      let output = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + e.Address.split(' ').join('+') + '&key=' + this.state.apiKey;
      console.log(output);
      axios.get(output)
        .then(res => {
          console.log(res);
          console.log(res.data.results[0].geometry.location);
          e.location = res.data.results[0].geometry.location;
          console.log(e);
          let newRamens = this.state.ramens.slice()
          newRamens[index] = e
          this.setState({
            ramens: newRamens
          })
          console.log(this.state.ramens[index]);
        })
    })
  }

  render() {
    return (
      <div class="map-container--inner">
        <Map google={this.props.google} zoom={14} initialCenter={{lat: 40.743596, lng:-73.990271}}>
          {this.state.ramens.map(e => {
            return <Marker name={'Dolores park'} position={e.location} />
          })}
       </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBDI_iT48_yucAzAFmdzUKQ1tVWTomj96M'
})(MapContainer)
