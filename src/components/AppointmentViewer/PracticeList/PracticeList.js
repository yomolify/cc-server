import React, {Component} from 'react';
import Radium from 'radium';
import PracticeCard from './PracticeCard/PracticeCard';

@Radium
export default class PracticeList extends Component {
  render () {
    const {date, time} = this.props;
    var practiceCardNodes = practices.practice.map(function (practice) {
      return (
        <PracticeCard practice={practice} date={date} time={time}/>
      )
    });
    return (
      <div>{practiceCardNodes}</div>
    );
  }
}

const practices = {
  'practice': [
      {
    'Name': 'West Fourth Dental',
    'Address': '2339 4th Avenue',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V1X 8B5',
    'Services': [
     'Dental Emergency',
     'General Consult',
     'Cosmetic Surgery'
     ],
    'Practitioners': [
    {
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
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    },
    {
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
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    }
   ]
  },
  {
   'Name': 'Arbutus North Dental',
   'Address': '3412 5th Avenue',
   'City': 'Vancouver',
   'Provice': 'BC',
   'PostalCode': 'V4S4F5',
   'Services': [
    'Dental Emergency',
    'General Consult',
    'Cosmetic Surgery'
   ],
   'Practitioners': [
    {
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
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    },
    {
     'FirstName': 'Gordon',
     'LastName': 'Katic',
     'DateOfBirth': '1962-12-22T18:25:43.511Z',
     'Specialization': 'Surgery',
     'Education': 'MD',
     'Address': '3412 5th Avenue',
     'City': 'Hope',
     'Province': 'BC',
     'PostalCode': 'V1X 8B5',
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    }
   ]
  }
 ]
}