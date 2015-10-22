import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PracticeCard from './PracticeCard/PracticeCard';

const practices = {
  'practice': [{
    'Name': 'Yaletown Dentistry',
    'Address': '2705 West 4th Avenue',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V1X 8B5',
    'Services': [
      'Dental Emergency',
      'General Consult',
      'Cosmetic Surgery'
    ],
    'Practitioners': [{
      'FirstName': 'Lonny',
      'LastName': 'Mclean',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Dentist',
      'Education': 'MD',
      'Address': '2450 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'Availability': [{
        'Sun Sep 27 2015': [
          '12:30PM',
          '2:00PM',
          '5:00PM'
        ]
      }, {
        'Mon Sep 28 2015': [
          '1:30PM, 4:00PM'
        ]
      }]
    }, {
      'FirstName': 'Christina',
      'LastName': 'Brown',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Dental Hygenist',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'Availability': [{
        'Sun Sep 27 2015': [
          '12:30PM',
          '2:00PM',
          '5:00PM'
        ]
      }, {
        'Mon Sep 28 2015': [
          '1:30PM, 4:00PM'
        ]
      }]
    }]
  }, {
    'Name': 'Kitsilano Dental Group',
    'Address': '2705 West 4th Avenue',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V1X 8B5',
    'Services': [
      'Dental Emergency',
      'General Consult',
      'Cosmetic Surgery'
    ],
    'Practitioners': [{
      'FirstName': 'Nazeem S.',
      'LastName': 'Kanani',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Dentist',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'Availability': [{
        'Sun Sep 27 2015': [
          '12:30PM',
          '2:00PM',
          '5:00PM'
        ]
      }, {
        'Mon Sep 28 2015': [
          '1:30PM, 4:00PM'
        ]
      }]
    }, {
      'FirstName': 'Monique',
      'LastName': 'Verhoef',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Dental Hygenist',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'Availability': [{
        'Sun Sep 27 2015': [
          '12:30PM',
          '2:00PM',
          '5:00PM'
        ]
      }, {
        'Mon Sep 28 2015': [
          '1:30PM, 4:00PM'
        ]
      }]
    }]
  }, {
    'Name': 'Atlantis Dental Centre',
    'Address': '1278 Pacific Boulevard',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V1X 8B5',
    'Services': [
      'Dental Emergency',
      'General Consult',
      'Cosmetic Surgery'
    ],
    'Practitioners': [{
      'FirstName': 'Tom',
      'LastName': 'Karkanis',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Dentist',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'Availability': [{
        'Sun Sep 27 2015': [
          '12:30PM',
          '2:00PM',
          '5:00PM'
        ]
      }, {
        'Mon Sep 28 2015': [
          '1:30PM, 4:00PM'
        ]
      }]
    }, {
      'FirstName': 'Amy',
      'LastName': 'Yu',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Dental Hygenist',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'Availability': [{
        'Sun Sep 27 2015': [
          '12:30PM',
          '2:00PM',
          '5:00PM'
        ]
      }, {
        'Mon Sep 28 2015': [
          '1:30PM, 4:00PM'
        ]
      }]
    }]
  }]
};

@Radium
export default class PracticeList extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practitioner: PropTypes.any.isRequired
  }
  render() {
    const {
      date, time, practitioner
    } = this.props;
    /*eslint-disable */
    const practiceCardNodes = practices.practice.map(function(practice) {
      if (practice.Name === practitioner) {
        return (
          <PracticeCard practice={practice} date={date} time={time}/>
        );
      } else if (practitioner === 'Select Practice') {
        return (
          <PracticeCard practice={practice} date={date} time={time}/>
        );
      }
    });
    /*eslint-enable */
    return (
      <div style={{overflow: 'scroll', overflowX: 'hidden', height: '1000px', width: '100%'}}>{practiceCardNodes}</div>
    );
  }
}
