import React, {
  Component
}
from 'react/addons';
import Radium from 'radium';
import GoogleMap from 'google-map-react';
import SimpleMapPage from './SimpleMapPage';
const und = 'undefined';

const geolocation = (
  'undefined' !== typeof window && navigator && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

console.log('gitTest');
@Radium
export default class GeolocationService extends Component {
  state = {
    center: {
      lat: 49.249383,
      lng: -123.115676
    }
  }
  componentWillMount() {
    geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const centerNew = this.state.center;
      centerNew.lat = lat;
      centerNew.lng = lng;
      this.setState({
        center: centerNew
      });
    });
  }

  render() {
    const {
      center
    } = this.state;
    const zoom = 13;
    return (
      <div>
        <SimpleMapPage center={center} zoom={zoom} />
      </div>
    );
  }
}
