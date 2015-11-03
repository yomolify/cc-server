import Kronos from 'react-kronos';
import React, {
  Component, PropTypes
}
from 'react';
import moment from 'moment';
import {connectReduxForm} from 'redux-form';
// import Sticky from 'react-sticky';
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

@connectReduxForm({
  form: 'SearchBarForm',
  fields: ['patientName', 'patientEmail', 'patientPhoneNumber']
  // state => ({user: state.auth.user, token: state.auth.token}),
  // dispatch => bindActionCreators(bookActions, dispatch)
})
export default class SearchBarComponent extends Component {
  static propTypes = {
    user: PropTypes.object,
    token: PropTypes.string,
    login: PropTypes.func,
    book: PropTypes.func,
    logout: PropTypes.func,
    modalIsOpen: PropTypes.bool,
    pickedDate: PropTypes.string,
    pickedTime: PropTypes.string,
    pickedPractitioner: PropTypes.string,
    handleSubmit: PropTypes.func
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
      pickedPractitioner
    } = this.state;
    const {
      handleSubmit
    } = this.props;
    const styles = require('./SearchBar.scss');
    const ddStyle = require('./DropdownStyle.css');
    const preventNotUsedErr = ddStyle.toString();
    console.log(preventNotUsedErr.charAt(1));
    const listStyle = {
      datetime: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-around',
        background: '#2778C7',
        border: '5px solid #2778C7'
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
            <form onSubmit={handleSubmit}>
              <div className="kronos">
                <div style={listStyle.datetime}>
                  <Kronos
                      date={this.state.datetime}
                      onChange={::this.onChange}
                      min={minDate}
                      max={maxDate}
                      format="dddd, MMM Do"
                      {...props}/>
                  <Kronos
                      time={this.state.datetime}
                      onChange={::this.onChange}
                      min={minDate}
                      max={maxDate}
                      {...props}/>
                  <Select
                    name="form-field-name"
                    value={pickedPractitioner}
                    options={practitioners}
                    onChange={::this.practitionerChange}
                    ref="practitioner"
                    style={{width: '50%'}}/>
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
}
