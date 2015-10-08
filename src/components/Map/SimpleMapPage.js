import React, {PropTypes, Component} from 'react/addons';
import Radium from 'radium';
import controllable from 'react-controllables';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {List} from 'immutable';
import GoogleMap from 'google-map-react';
import Marker from 'google-map-react';
import SearchBox from 'google-map-react';

@Radium
export default class SimpleMapPage extends Component {

  static defaultProps = {
    center:  {lat: 59.938043, lng: 30.337157},
    zoom: 12
  }


  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

      return (
        <div style={{width:'100%', height:'945px'}}>
          <GoogleMap
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <div lat={59.955413} lng={30.337844}>a</div>
          </GoogleMap>
      </div>
        );
  }
}
