  import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class PracticeList extends Component {
  render () {
    var practiceCardNodes = practices.practice.map(function (practice) {
      return (
        <PracticeCard practice={practice}/>
      )
    });
    return (
      <div>{practiceCardNodes}</div>
    );
  }
}
@Radium
class PracticeCard extends Component {

  render() {
    const cardStyles = {
      card: {
        background: '#FFFFFF',
        borderRadius: '10px',
        float: 'left',
        padding: '10px',
        marginTop: '6em',
        marginLeft: '2em',
        marginRight: '2em',
        marginBottom: '2em',
        position: 'relative',
        width: '520px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
        },
    };
    return (
      <div style={{height: '500px', length:'500px', position:'relative'}}>
        <div key='one' style={cardStyles.card}>
          <PracticeCardHeader practiceName={this.props.practice.Name} practiceAddress={this.props.practice.Address} />
          <PractitionerCardList data={this.props.practice.Practitioners}/>
        </div>
      </div>
    );
  }
}


@Radium
class PractitionerCardList extends Component {
    render() {
      var practitionerCardNodes = this.props.data.map(function (practitioner) {
        return (
          <PractitionerCard practitioner={practitioner}>
          </PractitionerCard>
        );
      });
    return (
      <div className="practitionerCards">
        {practitionerCardNodes}
      </div>
    );
  }
}

@Radium
class PractitionerCard extends Component {
  render() {
    const childCardStyle = {
      card: {
        background: '#FFFFFF',
        borderRadius: '10px',
        float: 'left',
        height: '150px',
        margin: '1rem',
        position: 'relative',
        width: '480px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        },
      },
    }
    return (
      <div style={childCardStyle.card}>
        <PractitionerCardHeader firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
      </div>
    );
  }
}

@Radium
class PracticeCardHeader extends Component {
  render() {
    const styles = {
      borderRadius: '10px',
      float: 'left',
      fontStyle: 'Roboto',
      padding: '1rem',
      background:'FFF',
      name : {
        fontSize:'1.625rem',
        fontWeight: '200',
      },
      address: {
        fontSize: '.85rem',
        fontWeight: '100',
      },
    }
    return (
      <div>
        <h3 style={styles.name}>{this.props.practiceName}</h3>
        <small style={styles.address}>{this.props.practiceAddress}</small>
      </div>
    );
  }
}

@Radium
class PractitionerCardHeader extends Component {
  render() {
    const styles = {
      borderRadius: '10px',
      float: 'left',
      fontStyle: 'Roboto',
      padding: '1rem',
      background:'FFF',
      name : {
        fontSize: '1.625rem',
        fontWeight: '200',
      },
      specialization: {
        fontSize: '.85rem',
        fontWeight: '100',
      },
    }
    const name = this.props.firstName + ' ' + this.props.lastName;
    return (
      <div>
        <h3 style={styles.name}>{name}</h3>
        <small style={styles.specialization}>{this.props.specialization}</small>
      </div>
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