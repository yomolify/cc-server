import React, {
  Component
}
from 'react';
import AppointmentViewer from '../../components/AppointmentViewer/AppointmentViewer';

const practices = {
  'practice': [{
    'Name': 'West Fourth Dental',
    'Address': '2339 4th Avenue',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V1X 8B5',
    'Services': ['Dental Emergency', 'General Consult', 'Cosmetic Surgery'],
    'Doctors': [{
      'FirstName': 'Jack',
      'LastName': 'Carter',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Surgery',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'AvailableTimes': ['10:30AM', '3:30PM', '7:30PM']
    }, {
      'FirstName': 'Amir',
      'LastName': 'Hayeri',
      'DateOfBirth': '1980-02-22T18:25:43.511Z',
      'Specialization': 'Cosmetic',
      'Education': 'MD',
      'Address': '7913 West 9th Ave',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'AvailableTimes': ['12:30PM', '2:00PM', '5:00PM']
    }]
  }, {
    'Name': 'Arbutus North Dental',
    'Address': '3412 5th Avenue',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V4S4F5',
    'Services': ['Dental Emergency', 'General Consult', 'Cosmetic Surgery'],
    'Doctors': [{
      'FirstName': 'John',
      'LastName': 'Kimble',
      'DateOfBirth': '1955-04-12T18:25:43.511Z',
      'Specialization': 'General Consult',
      'Education': 'MD',
      'Address': '3412 5th Avenue',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'AvailableTimes': ['12:30PM', '3:00PM', '5:30PM']
    }, {
      'FirstName': 'Gordon',
      'LastName': 'Katic',
      'DateOfBirth': '1962-12-22T18:25:43.511Z',
      'Specialization': 'Surgery',
      'Education': 'MD',
      'Address': '3412 5th Avenue',
      'City': 'Hope',
      'Province': 'BC',
      'PostalCode': 'V1X 8B5',
      'Country': 'Canada',
      'AvailableTimes': ['12:00PM', '2:00PM', '4:30PM']
    }]
  }]
};

export default class Scheduler extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <AppointmentViewer practices={practices} />
      </div>
    );
  }
}
