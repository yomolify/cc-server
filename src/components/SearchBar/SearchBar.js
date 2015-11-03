import React, {
  Component, PropTypes
}
from 'react';
import AppointmentViewer from '../AppointmentViewer/AppointmentViewer';
import SearchBarComponent from './SearchBarComponent';
import moment from 'moment';

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

  handleSubmit() {
    console.log(123123123123);
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
    const preventNotUsedErr = ddStyle.toString();
    console.log(preventNotUsedErr.charAt(1));
    return (
      <div>
        {
          <div style={styles}>
            <SearchBarComponent onSubmit={::this.handleSubmit}/>
            <div>
              <AppointmentViewer style={{fontFamily: 'Helvetica Neue'}} date={pickedDate} time={pickedTime} practitioner={pickedPractitioner}/>
            </div>
          </div>
        }
      </div>
    );
  }
}
