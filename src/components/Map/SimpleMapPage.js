import React, {Component} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};


// Geolocation funct
const geolocation = (
  "undefined" !== typeof window && navigator && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
      success(alert("We successfully geolocated"));
    },
  }
);

export default class SimpleMapPage extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  // componentDidMount () {
  //     geolocation.getCurrentPosition((position) => {
  //       setProps({
  //         center: new List([position.coords.latitude, position.coords.longitude]),
  //         content: "Location found using HTML5.",
  //       });
  //       console.log(this.props.center);
  //       console.log(position.coords.latitude);
  //       console.log(position.coords.longitude);
  //     });
  //   }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

}



// import React, {PropTypes, Component} from 'react/addons';
// import Radium from 'radium';
// import controllable from 'react-controllables';
// import shouldPureComponentUpdate from 'react-pure-render/function';
// import {List} from 'immutable';
// import GoogleMap from 'google-map-react';
// import Marker from 'google-map-react';
// import SearchBox from 'google-map-react';
// const K_MARGIN_TOP = 30;
// const K_MARGIN_RIGHT = 30;
// const K_MARGIN_BOTTOM = 30;
// const K_MARGIN_LEFT = 30;
// const K_HOVER_DISTANCE = 30;

// const geolocation = (
//   "undefined" !== typeof window && navigator && navigator.geolocation || {
//     getCurrentPosition: (success, failure) => {
//       failure("Your browser doesn't support geolocation.");
//       success(alert("We successfully geolocated"));
//     },
//   }
// );

// @Radium
// // @controllable(['center', 'zoom', 'markers'])
// export default class SimpleMapPage extends Component {
//   static propTypes = {
//     onCenterChange: PropTypes.func, // @controllable generated fn
//     onZoomChange: PropTypes.func, // @controllable generated fn
//     onBoundsChange: PropTypes.func,
//     onMarkerHover: PropTypes.func,
//     onChildClick: PropTypes.func,
//     center: PropTypes.any,
//     zoom: PropTypes.number,
//     markers: PropTypes.any,
//     myLocation: PropTypes.any,
//     visibleRowFirst: PropTypes.number,
//     visibleRowLast: PropTypes.number,
//     maxVisibleRows: PropTypes.number,
//     hoveredRowIndex: PropTypes.number,
//     openBallonIndex: PropTypes.number
//   }

//   static defaultProps = {
//     center: new List([49.257316, -123.119359]),
//     zoom: 12,
//     visibleRowFirst: -1,
//     visibleRowLast: -1,
//     hoveredRowIndex: -1,
//     apiKey: 'AIzaSyDH8q0leo3eqNenuB5o2cL_m7G7D4o5N5M'
//   }

//   // constructor(props) {
//   //   super(props);
//   // }
//   // componentWillUpdate() {
//   //     var map = React.findDOMNode(this.refs.map);
//   //     google.maps.event.trigger(map, 'resize');
//   // }

//   componentDidMount () {
//       geolocation.getCurrentPosition((position) => {
//         setProps({
//           center: new List([position.coords.latitude, position.coords.longitude]),
//           content: "Location found using HTML5.",
//         });
//         console.log(this.props.center);
//         console.log(position.coords.latitude);
//         console.log(position.coords.longitude);
//       });
//     }

//   shouldComponentUpdate = shouldPureComponentUpdate;

//   _onBoundsChange = (center, zoom, bounds, marginBounds) => {
//     if (this.props.onBoundsChange) {
//       this.props.onBoundsChange({center, zoom, bounds, marginBounds});
//     } else {
//       this.props.onCenterChange(center);
//       this.props.onZoomChange(zoom);
//     }
//   }

//   _onChildClick = (key, childProps) => {
//     const markerId = childProps.marker.get('id');
//     const index = this.props.markers.findIndex(m => m.get('id') === markerId);
//     if (this.props.onChildClick) {
//       this.props.onChildClick(index);
//     }
//   }

//   _onChildMouseEnter = (key, childProps) => {
//     const markerId = childProps.marker.get('id');
//     const index = this.props.markers.findIndex(m => m.get('id') === markerId);
//     if (this.props.onMarkerHover) {
//       this.props.onMarkerHover(index);
//     }
//   }

//   _onChildMouseLeave = (/* key, childProps */) => {
//     if (this.props.onMarkerHover) {
//       this.props.onMarkerHover(-1); 
//     }
//   }

//   _onBalloonCloseClick = () => {
//     if (this.props.onChildClick) {
//       this.props.onChildClick(-1);
//     }
//   }


//   render() {
//       // const Markers = this.props.markers &&
//       // this.props.markers.filter((m, index) => index >= rowFrom && index <= rowTo)
//       // .map((marker, index) => (
//       //   <Marker
//       //     // required props
//       //     key={marker.get('id')}
//       //     lat={marker.get('lat')}
//       //     lng={marker.get('lng')}
//       //     // any user props
//       //     showBallon={index + rowFrom === this.props.openBallonIndex}
//       //     onCloseClick={this._onBalloonCloseClick}
//       //     hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
//       //     scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
//       //     {...markerDescriptions[marker.get('type')]}
//       //     marker={marker} />
//       // ));
//       const HomeMarker =
//         <Marker
//           //required props
//           key={'myLocation'}
//           lat={this.props.center.lat}
//           lng={this.props.center.lng} />

//       return (
//         <div style={{width:'100%', height:'500px'}}>
//           <GoogleMap
//             center={this.props.center.toJS()}
//             zoom={this.props.zoom}
//             apiKey={this.props.apiKey}
//             margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
//             hoverDistance={K_HOVER_DISTANCE}
//             distanceToMouse={this._distanceToMouse}>
//           </GoogleMap>
//       </div>
//         );
//   }
// }