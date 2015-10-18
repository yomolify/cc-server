import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import AppointmentViewer from '../AppointmentViewer/AppointmentViewer'
// import * as authActions from 'redux/modules/auth';
import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import IsomorphicDatePicker from 'components';
// import Calendar from 'react-input-calendar';
// import ReactWidgets from 'react-widgets';
// const DateTimePicker = ReactWidgets.DateTimePicker;
// import DayPicker from 'react-day-picker';
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import Modal from 'react-modal';
// const DateTimeField = require('react-bootstrap-datetimepicker');
const Select = require('react-select');

var dates = [
    { value: '2015-10-06', label: 'Tuesday, 6th October' },
    { value: '2015-10-07', label: 'Wednesday, 7th October' },
    { value: '2015-10-08', label: 'Thursday, 8th October' },
    { value: '2015-10-09', label: 'Friday, 9th October' },
    { value: '2015-10-10', label: 'Saturday, 10th October' },
    { value: '2015-10-11', label: 'Sunday, 11th October' },
    { value: '2015-10-12', label: 'Monday, 12th October' },
    { value: '2015-10-13', label: 'Tuesday, 13th October' },
    { value: '2015-10-14', label: 'Wednesday, 14th October' },
    { value: '2015-10-15', label: 'Thursday, 15th October' },
    { value: '2015-10-16', label: 'Thursday, 16th October' }
];

var times = [
    { value: '08:00', label: '8:00 AM' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
];

// var pickedDate = 'Monday, 5th October';
// var pickedTime = '13:00';
// function dateChange(val) {
//     pickedDate = val
// }
// function timeChange(val) {
//     pickedTime = val
// }

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class SearchBar extends Component {
  state = {
    pickedDate: '2015-10-08',
    pickedTime: '15:00'
  }
  dateChange(val) {
    this.setState({pickedDate: val});
  }
  timeChange(val) {
    this.setState({pickedTime: val});
  }
  static propTypes = {
    user: PropTypes.object,
    token: PropTypes.string,
    login: PropTypes.func,
    book: PropTypes.func,
    logout: PropTypes.func,
    modalIsOpen: PropTypes.bool,
    pickedDate: PropTypes.string,
    pickedTime: PropTypes.string
  }

  static fetchData(store) {
    if (!isAuthLoaded(store.getState())) {
      return store.dispatch(loadAuth());
    }
  }

  // For adding a button to change user this
  // handleSubmit(event) {
  //   event.preventDefault();
  //   // const doctorName = this.refs.doctorName.getDOMNode();  // need for getDOMNode() call going away in React 0.14
  //   // const patientName = this.refs.patientName.getDOMNode();
  //   // datetime = this.refs.datetime;
  //   // console.log(datetime)
  //   // var postDateTime = moment(datetime);
  //   // var postISODateTime = moment(postDateTime).toISOString();
  //   // const time = this.refs.time.getDOMNode();

  //   // const appointmentStartTime = date.value + ' ' + time.value;
  //   // appointment.endTime = appointment.startTime.add(1, 'h');
  //   // var appointmentEndTime = appointment.date + " " + appointment.endTime
  //   // const appointmentStartISO = moment(appointmentStartTime).toISOString();

  //   // this.props.book(doctorName, patientName, postDateTime);
  //   // username.value = '';
  //   // password.value = '';
  // }
  render() {
    const {pickedDate, pickedTime} = this.state;
    // console.log('modalIsOpen', modalIsOpen);
    const styles = require('./SearchBar.scss');
    // const datepickerStyle = require('./DatePickerStyle.css');
    // const dropdownStyle = require('./DropdownStyle.css')
    const listStyle = {
      li: {
        float: 'left',
        margin: '1em',
        display: 'inline-block',
        width: '30%'
      },
      ul: {
          width: '43.6%',
          position: 'absolute',
          left: '10px',
          margin: '1em 1em -2em 0em',
          padding: '0.2em'
      }
    }
    // console.log('SearchBar', pickedDate)
    return (
      <div>
        {
        <div style={styles}>
          <ul style={listStyle.ul}>
            <li style={listStyle.li}><Select
                name="form-field-name"
                value={pickedDate}
                options={dates}
                onChange={::this.dateChange}
                ref="date"
            /></li>
            <li style={listStyle.li}><Select
                name="form-field-name"
                value={pickedTime}
                options={times}
                onChange={::this.timeChange}
                ref="time"
            /></li>
          </ul>
          <div>
            <br/>
            <br/>
            <br/>
            <AppointmentViewer style={{fontFamily: "Helvetica Neue"}} date={pickedDate} time={pickedTime} />
          </div>
        </div>

        }
      </div>
    );
  }
}
