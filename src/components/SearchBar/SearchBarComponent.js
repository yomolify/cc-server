import Kronos from 'react-kronos';
import React, {
  Component, PropTypes
}
from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import * as searchActions from '../../redux/modules/auth';
// import Sticky from 'react-sticky';
const Select = require('react-select');

@connect(
  state => ({practices: state.auth.practices}),
  dispatch => bindActionCreators(searchActions, dispatch))
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
    practices: PropTypes.any,
    search: PropTypes.func,
    handleSubmit: PropTypes.func
  }
  state = {
    pickedDate: '2015-10-08',
    pickedTime: '15:00',
    pickedPractitioner: 'Select Practice',
    pickedPractice: 'All practices',
    pickedNeighborhood: 'All Neighborhoods',
    pickedLocation: 'City, Neighbourhood or Postal Code',
    datetime: moment().toISOString(),
    statePractices: []
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

  practiceChange(val) {
    if (val === '') {
      this.setState({
        pickedPractice: 'Select Practice'
      });
    } else {
      this.setState({
        pickedPractice: val
      });
    }
  }
  neighborhoodChange(val) {
    if (val === '') {
      this.setState({
        pickedNeighborhood: 'Neighborhood'
      });
    } else {
      this.setState({
        pickedNeighborhood: val
      });
    }
  }

  handleSubmit() {
    // for (let i = 0; i < 3; i++) {
    //   if (this.props.practices[i].Name === this.state.pickedPractice) {
    //     this.setState({statePractices: this.state.statePractices.push(this.props.practices[i])})
    //   }
    //   if (this.props.practices[i].Neighborhood === this.state.pickedNeighborhood) {
    //     this.setState({statePractices: this.state.statePractices.push(this.props.practices[i])})
    //   }
    // }
    // console.log("statePractices", this.state.statePractices);
    this.props.search(this.state.pickedPractice, this.state.pickedNeighborhood);
  }

  static fetchData(store) {
    if (!isAuthLoaded(store.getState())) {
      return store.dispatch(loadAuth());
    }
  }

  render() {
    const {
      pickedPractice, pickedNeighborhood
    } = this.state;
    const {
      practices
    } = this.props;
    const styles = require('./SearchBar.scss');
    const ddStyle = require('./DropdownStyle.css');
    const preventNotUsedErr = ddStyle.toString();
    console.log(preventNotUsedErr.charAt(1));
    /*eslint-disable */
    let practiceOptions = [{value: 'all', label: "All Practices"}];
    for (let i = 0; i < practices.length; i++) {
      let practiceName = practices[i].Name;
      practiceOptions.push({value: practiceName, label: practiceName});
    }
    let neighborhoodOptions = [{value: 'all', label: 'All Neighborhoods'}];
    for (let i = 0; i < practices.length; i++) {
      let neighborhoodName = practices[i].Neighborhood;
      neighborhoodOptions.push({value: neighborhoodName, label: neighborhoodName});
    }
    /*eslint-enable */
    const listStyle = {
      datetime: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-around',
        background: '#eee',
        border: '10px solid #eee',
        fontSize: '20px'
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
                <div style={listStyle.datetime}>
                  <div style={{padding: '5px'}}/>
                  <Kronos
                      date={this.state.datetime}
                      onChange={::this.onChange}
                      min={minDate}
                      max={maxDate}
                      format="dddd, MMM Do"
                      {...props}/>
                  <div style={{padding: '5px'}}/>
                  <Kronos
                      time={this.state.datetime}
                      onChange={::this.onChange}
                      min={minDate}
                      max={maxDate}
                      {...props}/>
                  <div style={{padding: '5px'}}/>
                  <Select
                    name="practice"
                    value={pickedPractice}
                    options={practiceOptions}
                    onChange={::this.practiceChange}
                    ref="practice"
                    />
                  <div style={{padding: '5px'}}/>
                  <Select
                    name="neighborhood"
                    value={pickedNeighborhood}
                    options={neighborhoodOptions}
                    onChange={::this.neighborhoodChange}
                    ref="neighborhood"
                    />
                  <button style={{paddingRight: '22px', marginLeft: '10px'}} onClick={::this.handleSubmit}>Search</button>
                  <div style={{padding: '5px'}}/>
                </div>
              </div>
          </div>
        }
      </div>
    );
  }
}
