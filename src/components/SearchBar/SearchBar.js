// import React, { Component } from 'react';
import Moment from 'moment';
import Kronos from  'react-kronos';
// Dunno why this is here?
// import Kronos from '../dist/kronos.min'
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
const practitioners = [
    { value: 'Select Practice', label: 'Select Practice'},
    { value: 'Kitsilano Dental Group', label: 'Kitsilano Dental Group'},
    { value: 'Atlantis Dental Centre', label: 'Atlantis Dental Centre' },
    { value: 'Yaletown Dentistry', label: 'Yaletown Dentistry' }
];


export default class SearchBar extends Component {
  state = {
    pickedDate: '2015-10-08',
    pickedTime: '15:00',
    pickedPractitioner: 'Select Practice',
    datetime: Moment().toISOString()

  }
  practitionerChange(val) {
    if (val === '') {
      console.log('val', val)
      this.setState({pickedPractitioner: 'Select Practice'});
    }
    else {
      this.setState({pickedPractitioner: val});
    }
  }
  static propTypes = {
    user: PropTypes.object,
    token: PropTypes.string,
    login: PropTypes.func,
    book: PropTypes.func,
    logout: PropTypes.func,
    modalIsOpen: PropTypes.bool,
    pickedDate: PropTypes.string,
    pickedTime: PropTypes.string,
    pickedPractitioner: PropTypes.string
  }

  static fetchData(store) {
    if (!isAuthLoaded(store.getState())) {
      return store.dispatch(loadAuth());
    }
  }

  onChange(datetime) {

    console.log('datetime:', datetime)

    let selected = moment(datetime);

    let hour = selected.hour();
    let hourString = hour.toString() + ':00';
    this.setState({pickedTime: hourString});
    this.setState({ datetime: datetime })

    let date = selected.date();
    let dateString = date.toString();
    if (date < 10) {
      dateString = '0' + date.toString();
    }
    else {
      dateString = date.toString();
    }

    let month = selected.month();
    let monthString = month.toString();
    if (month < 10) {
      monthString = '0' + month.toString();
    }
    else {
      monthString = month.toString();
    }

    let year = selected.year();
    let yearString = year.toString();

    // console.log(yearString + '-' + monthString + '-' + dateString)
    let wholeDate = yearString + '-' + monthString + '-' + dateString
    console.log(wholeDate)
    this.setState({pickedDate: wholeDate});

  }

  render() {
    const {pickedDate, pickedTime, pickedPractitioner} = this.state;
    // console.log('modalIsOpen', modalIsOpen);
    const styles = require('./SearchBar.scss');
    // const datepickerStyle = require('./DatePickerStyle.css');
    const dropdownStyle = require('./DropdownStyle.css')
    const listStyle = {
      li: {
        float: 'left',
        margin: '0.3em',
        display: 'inline-block',
        width: '27%'
      },
      ul: {
          width: '32.7%',
          position: 'absolute',
          left: '10px',
          margin: '1.8em 1em -2em 0.9em',
          padding: '0.2em'
      }
    }
    let style = {
      app: {
        display: 'flex',
        minHeight: '100%',
        backgroundColor: 'hsl(0, 0%, 94%)',
        fontFamily: 'Helvetica Neue',
      },
      page: {
        backgroundColor: 'white',
        margin: '160px auto 100px',
        minWidth: 800,
        boxShadow: '0 0 12px 2px hsla(0, 0%, 0%, 0.1)',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 32,
      },
      tagline: {
        color: 'hsl(0, 0%, 66%)',
        fontStyle: 'italic',
      },
      main: {
        backgroundColor: 'hsl(0, 0%, 97%)',
        padding: '48px 0',
      },
      coming: {
        margin: 32,
        color: 'hsl(0, 0%, 66%)',
        fontStyle: 'italic',
      }
    }

    let props = {
      options: {
        color: '#67c446',
        corners: 4,
        fontFamily: 'Source Sans Pro',
      },
      // shouldTriggerOnChangeForDateTimeOutsideRange: true,
      // closeOnBlur: false,
    }

    let minDate = Moment()
    let maxDate = Moment().add(2, 'weeks').toDate()
    const {date, time} = this.props;
    return (
      <div>
        {
        <div style={styles}>
          <div className='kronos'>
            <ul style={listStyle.ul}>
              <li style={listStyle.li}>
                <Kronos
                    date={this.state.datetime}
                    onChange={::this.onChange}
                    min={minDate}
                    max={maxDate}
                    format='dddd, MMM Do'
                    {...props}
                  />
              </li>
              <li style={listStyle.li}>
                <Kronos
                    time={this.state.datetime}
                    onChange={::this.onChange}
                    min={minDate}
                    max={maxDate}
                    {...props}
                  />
              </li>
              <li style={listStyle.li}><Select
                name="form-field-name"
                value={pickedPractitioner}
                options={practitioners}
                onChange={::this.practitionerChange}
                ref="practitioner"
            /></li>
            </ul>
          </div>
          <div>
            <br/>
            <br/>
            <br/>
            <AppointmentViewer style={{fontFamily: "Helvetica Neue"}} date={pickedDate} time={pickedTime} practitioner={pickedPractitioner}/>
          </div>
        </div>

        }
      </div>
    )
  }
}


