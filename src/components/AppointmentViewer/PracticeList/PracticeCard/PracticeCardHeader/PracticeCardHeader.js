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
      name: {
        color: '#555',
        fontSize: '3em',
        fontWeight: '400',
        textAlign: 'center',
        paddingBottom: '0.4em'
      }
    };
    return (
      <div>
        <h3 style={styles.name}>{this.props.practiceName}</h3>
      </div>
    );
  }
}
