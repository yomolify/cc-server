import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';

@Radium
export default
class PracticeCardHeader extends Component {
  static propTypes = {
    practiceName: PropTypes.string.isRequired,
    practiceAddress: PropTypes.string.isRequired
  }
  render() {
    const styles = {
      borderRadius: '10px',
      float: 'left',
      fontStyle: 'Roboto',
      padding: '1rem',
      background: 'FFF',
      name: {
        fontSize: '2.5rem',
        fontWeight: '300',
        paddingLeft: '0.5em'
      },
      appointment: {
        fontSize: '1.5rem',
        fontWeight: '200',
        paddingLeft: '0.5em'
      },
      address: {
        fontSize: '2rem',
        fontWeight: '100',
        paddingLeft: '0.5em'
      },
    };
    return (
      <div>
        <h3 style={styles.name}>{this.props.practiceName}</h3>
        <small style={styles.address}>{this.props.practiceAddress}</small>
      </div>
    );
  }
}
