import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ramens: [
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
           "Address": "374 Johnson Ave Brooklyn, NY 11206"
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
      apiKey: "AIzaSyBDI_iT48_yucAzAFmdzUKQ1tVWTomj96M"
    }
  }

  render() {
    return (
      <div class="map-container--inner">
        <Map google={this.props.google} zoom={14}>
          https://maps.googleapis.com/maps/api/geocode/json?address=172+Delancey+St,+New+York,+NY&key=AIzaSyBDI_iT48_yucAzAFmdzUKQ1tVWTomj96M
       </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBDI_iT48_yucAzAFmdzUKQ1tVWTomj96M'
})(MapContainer)
