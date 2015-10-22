import Kronos from 'react-kronos';
import React, {
  Component, PropTypes
}
from 'react';
import AppointmentViewer from '../AppointmentViewer/AppointmentViewer';
import moment from 'moment';
const Select = require('react-select');
const practitioners = [{
  value: 'Select Practice',
  label: 'Select Practice'
}, {
  value: 'Kitsilano Dental Group',
  label: 'Kitsilano Dental Group'
}, {
  value: 'Atlantis Dental Centre',
  label: 'Atlantis Dental Centre'
}, {
  value: 'Yaletown Dentistry',
  label: 'Yaletown Dentistry'
}];

export default class SearchBar extends Component {
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
  state = {
    pickedDate: '2015-10-08',
    pickedTime: '15:00',
    pickedPractitioner: 'Select Practice',
    datetime: moment().toISOString()
  }
  onChange(datetime) {
    const selected = moment(datetime);
    const hour = selected.hour();
    const hourString = hour.toString() + ':00';
    this.setState({
      pickedTime: hourString
    });
    this.setState({
      datetime: datetime
    });

    const date = selected.date();
    let dateString = date.toString();
    if (date < 10) {
      dateString = '0' + date.toString();
    } else {
      dateString = date.toString();
    }

    const month = selected.month();
    let monthString = month.toString();
    if (month < 10) {
      monthString = '0' + month.toString();
    } else {
      monthString = month.toString();
    }

    const year = selected.year();
    const yearString = year.toString();
    const wholeDate = yearString + '-' + monthString + '-' + dateString;
    this.setState({
      pickedDate: wholeDate
    });

  }

  practitionerChange(val) {
    if (val === '') {
      this.setState({
        pickedPractitioner: 'Select Practice'
      });
    } else {
      this.setState({
        pickedPractitioner: val
      });
    }
  }

  static fetchData(store) {
    if (!isAuthLoaded(store.getState())) {
      return store.dispatch(loadAuth());
    }
  }

  render() {
    const {
      pickedDate, pickedTime, pickedPractitioner
    } = this.state;
    const styles = require('./SearchBar.scss');
    const ddStyle = require('./DropdownStyle.css');
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
    };

    const props = {
      options: {
        color: '#67c446',
        corners: 4,
        fontFamily: 'Source Sans Pro',
      },
    };

    const minDate = moment();
    const maxDate = moment().add(2, 'weeks').toDate();
    return (
      <div>
        {
        <div style={styles}>
          <div className="kronos">
            <ul style={listStyle.ul}>
              <li style={listStyle.li}>
                <Kronos
                    date={this.state.datetime}
                    onChange={::this.onChange}
                    min={minDate}
                    max={maxDate}
                    format="dddd, MMM Do"
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
            <AppointmentViewer style={{fontFamily: 'Helvetica Neue'}} date={pickedDate} time={pickedTime} practitioner={pickedPractitioner}/>
          </div>
        </div>

        }
      </div>
    );
  }
}
