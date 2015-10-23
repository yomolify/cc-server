import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';

@Radium
export default
class PractitionerInfo extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired
  }
  render() {
    const styles = {
      borderRadius: '10px',
      float: 'left',
      fontStyle: 'Roboto',
      padding: '1rem',
      background: 'FFF',
      name: {
        fontSize: '1.825rem',
        fontWeight: '200',
        paddingLeft: '0.6em'
      },
      specialization: {
        fontSize: '1.5rem',
        fontWeight: '150',
        paddingLeft: '0.8em'
      },
    };
    const name = this.props.firstName + ' ' + this.props.lastName;
    return (
      <div>
        <h3 style={styles.name}>{name}</h3>
        <small style={styles.specialization}>{this.props.specialization}</small>
      </div>
    );
  }
}
