import React, {Component} from 'react';
import Radium from 'radium';

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
        fontSize: '2rem',
        padding: '1em',
        marginLeft: '30px'
      },
      specialization: {
        fontSize: '1.3rem',
        fontWeight: '150',
      },
    }
    const name = this.props.firstName + ' ' + this.props.lastName;
    return (
      <div style={styles.name}>
        {name}
        <small style={styles.specialization}>{this.props.specialization}</small>
      </div>
    );
  }
}