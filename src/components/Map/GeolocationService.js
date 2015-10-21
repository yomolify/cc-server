import React, {PropTypes, Component} from 'react/addons';
import Radium from 'radium';
import controllable from 'react-controllables';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {List} from 'immutable';
import GoogleMap from 'google-map-react';
import Marker from 'google-map-react';
import SearchBox from 'google-map-react';
import MyGreatPlaceWithHover from './my_great_place_with_hover.js';
import SimpleMapPage from './SimpleMapPage';

const geolocation = (
  "undefined" !== typeof window && navigator && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

const onscroll = function() {
  console.log('scrolling');
}


export default class GeolocationService extends Component {
  state = {
    center: {
      lat: 49.249383,
      lng: -123.115676
    }
  }
  componentWillMount() {
    geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          let centerNew = this.state.center;
          centerNew.lat = lat;
          centerNew.lng = lng;
          this.setState({center: centerNew});
      });
  }

 
  //shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    var {center} = this.state;
    var zoom = 13;
  	return (
  		<div>
  			<SimpleMapPage center={center} zoom={zoom} />
  		</div>
  	);
  }
}