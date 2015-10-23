import React, {
  Component, PropTypes
}
from 'react';
import {
  Gmaps, Marker, InfoWindow, Circle
}
from 'react-gmaps';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.any.isRequired,
      lng: PropTypes.any.isRequired,
    }),
    zoom: PropTypes.number.isRequired
  }
  state = {
    infoShow: false
  }

  componentWillReceiveProps(nextProps) {
    const newCenter = nextProps.center;
    this.setState({
      center: newCenter
    });
  }
  shouldComponentUpdate = shouldPureComponentUpdate;

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

  onMouseOver() {
    this.setState({
      infoShow: !this.state.infoShow
    });
  }
  onMapMouseOver() {
    this.setState({
      infoShow: true
    });
  }
  onMapMouseOut() {
    this.setState({
      infoShow: false
    });
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    const {
      infoShow
    } = this.state;
    console.log(infoShow);
    return (
      <Gmaps
        width={'100%'}
        height={'956px'}
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        zoom={this.props.zoom}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}
        >
        <Marker
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          onDragEnd={this.onDragEnd}
          onMouseOver={::this.onMouseOver} />
        <InfoWindow
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          content={'You'}
          onCloseClick={::this.onCloseClick} />

        <InfoWindow
          lat={49.273667}
          lng={-123.122521}
          content={'Atlantis Dental Centre'}
          onCloseClick={::this.onCloseClick} />
        <InfoWindow
          lat={49.268360}
          lng={-123.166454}
          content={'Kitisilano Dental Group'}
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
