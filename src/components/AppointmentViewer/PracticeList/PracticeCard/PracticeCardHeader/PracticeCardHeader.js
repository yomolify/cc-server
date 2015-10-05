import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default
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