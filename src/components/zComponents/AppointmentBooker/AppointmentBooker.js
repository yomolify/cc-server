import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppointmentForm from './AppointmentForm/AppointmentForm';
import * as bookActions from '../../../redux/modules/book';
import moment from 'moment';

@connect(
  () => ({}),
  dispatch => bindActionCreators(bookActions, dispatch)
)

export default class AppointmentBooker extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    book: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practitioner: PropTypes.string.isRequired
  }
  state = {
    show: false
  }

  handleSubmit(data) {
    const dateTime = this.props.date + ' ' + this.props.time;
    const sendDateTime = moment(dateTime);
    console.log('this.props.practitioner', this.props.practitioner);
    console.log('data.patientName', data.patientName);
    console.log('sendDateTime', sendDateTime);
    this.setState({show: true});

    this.props.book(this.props.practitioner, data.patientName, sendDateTime.toISOString());
  }

  render() {
    const {show} = this.state;
    return (
        <div style={{width: '100%', height: '100X'}}>
        <AppointmentForm onSubmit={::this.handleSubmit}/>
        {show && 'Appointment has been booked!'}
      </div>
    );
  }
}
