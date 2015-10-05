import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default
class PractitionerInfo extends Component {
  render() {
    const styles = {
      borderRadius: '10px',
      float: 'left',
      fontStyle: 'Roboto',
      padding: '1rem',
      background:'FFF',
      name : {
        fontSize: '1.825rem',
        fontWeight: '200',
      },
      specialization: {
        fontSize: '1.5rem',
        fontWeight: '150',
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