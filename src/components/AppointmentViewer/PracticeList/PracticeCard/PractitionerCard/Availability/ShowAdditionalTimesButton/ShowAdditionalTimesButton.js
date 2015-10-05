import React, {Component, PropTypes} from 'react';
import {Pill} from 'elemental';


export default class FirstAvailableButton extends Component {
 render() {
  // var Day = this.props.day;
  // var Time = this.props.time;
  return (
    <Pill style={{fontFamily: 'Roboto, Arial, sans-serif'}} label="More times" type="primary" disabled="true"/>
  );
 }
}
