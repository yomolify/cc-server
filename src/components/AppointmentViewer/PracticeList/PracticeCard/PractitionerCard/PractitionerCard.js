import React, {Component} from 'react';
import Radium from 'radium';
import PractitionerInfo from './PractitionerInfo/PractitionerInfo';


@Radium
export default class PractitionerCard extends Component {
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
        <PractitionerInfo firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
      </div>
    );
  }
}

