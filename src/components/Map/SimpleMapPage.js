import React, {Component} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import shouldPureComponentUpdate from 'react-pure-render/function';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

export default class SimpleMapPage extends Component {
  state = {
    infoShow: false
  }
 shouldComponentUpdate = shouldPureComponentUpdate;

 componentWillReceiveProps(nextProps) {
    var newCenter = nextProps.center;
    this.setState({center: newCenter});
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onMouseOver(e) {
    this.setState({infoShow: !this.state.infoShow});
    console.log('infoShow', this.state)
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    const {infoShow} = this.state;
    console.log(infoShow);
    return (
      <Gmaps
        width={'1339px'}
        height={'1000px'}
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        zoom={this.props.zoom}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.props.center.lat} 
          lng={this.props.center.lng}
          draggable={true}
          onDragEnd={this.onDragEnd}
          onMouseOver={::this.onMouseOver} />
        <InfoWindow
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          content={'You'}
          onCloseClick={::this.onCloseClick} />
        <Circle
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          radius={50}
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
// import MyGreatPlaceWithHover from './my_great_place_with_hover.js';

// @Radium
// export default class SimpleMapPage extends Component {

//   static defaultProps = {
//     center:  {lat: 49.263914799999995, lng: -123.2149846},
//     zoom: 13
//   }


//   shouldComponentUpdate = shouldPureComponentUpdate;

//   render() {
//     const K_SIZE = 40;

//     const greatPlaceStyle = {
//       // initially any map object has left top corner at lat lng coordinates
//       // it's on you to set object origin to 0,0 coordinates
//       position: 'absolute',
//       width: K_SIZE,
//       height: K_SIZE,
//       left: -K_SIZE / 2,
//       top: -K_SIZE / 2,

//       border: '2px solid #f44336',
//       backgroundColor: 'white',
//       textAlign: 'center',
//       color: '#3f51b5',
//       fontSize: 5,
//       padding: 2,
//       cursor: 'pointer'
//     };

//     const greatPlaceStyleHover = {
//       ...greatPlaceStyle,
//       border: '5px solid #3f51b5',
//       color: '#f44336'
//     };
//     const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

//       return (
//         <div style={{width:'100%', height:'1000px'}}>
//           <GoogleMap
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//             >
//             <MyGreatPlaceWithHover lat={49.266082} lng={-123.249972} text={'^'} /* Kreyser Avrora */ />
//             <MyGreatPlaceWithHover lat={49.273667} lng={-123.122521} text={'A'} /* Kreyser Avrora */ />
//             <MyGreatPlaceWithHover lat={49.268360} lng={-123.166454} text={'K'} /* Kreyser Avrora */ />
//           </GoogleMap>
//       </div>
//         );
//   }
// }
