import React from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ramenIcon from './static/images/ramen.png'

export class MapContainer extends React.Component {
  static propTypes = {
    mapData: PropTypes.array.isRequired,
    mapFocus: PropTypes.object.isRequired,
    zoomLevel: PropTypes.number.isRequired,
    selectedCardName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  // Display the infobox if the marker is clicked
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  render() {
    const {google} = this.props
    return (
      <div className='map-container--inner'>
        <Map google={this.props.google} zoom={this.props.zoomLevel} initialCenter={{lat: 40.743596, lng:-73.990271}} center={this.props.mapFocus}>
          {this.props.mapData.map(e => {
            let returnMarker
            // If the marker matches the selected card, use the special ramen icon and add bounce animation
            e.Name === this.props.selectedCardName
              ? (
                returnMarker = <Marker
                  name={e.Name}
                  address={e.Address}
                  position={e.location}
                  onClick={this.onMarkerClick}
                  animation={google.maps.Animation.BOUNCE}
                  icon={{
                    url: ramenIcon,
                    anchor: new google.maps.Point(16,16),
                    scaledSize: new google.maps.Size(32,32)
                  }}/>
              ) : (
                returnMarker = <Marker
                  name={e.Name}
                  address={e.Address}
                  position={e.location}
                  onClick={this.onMarkerClick}
                  />
              )
            return returnMarker
          })}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <h4>{this.state.selectedPlace.address}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)
