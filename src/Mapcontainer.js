import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <div class="map-container--inner">
        <Map google={this.props.google} zoom={14}>
       </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBDI_iT48_yucAzAFmdzUKQ1tVWTomj96M'
})(MapContainer)
