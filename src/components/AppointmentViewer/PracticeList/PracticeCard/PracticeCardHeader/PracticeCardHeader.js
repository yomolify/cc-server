import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default
class PracticeCardHeader extends Component {
  render() {
    const {date, time} = this.props;
    const styles = {
      borderRadius: '10px',
      float: 'left',
      fontStyle: 'Roboto',
      padding: '1rem',
      background:'FFF',
      name : {
        fontSize:'2.5rem',
        fontWeight: '300',
      },
      appointment : {
        fontSize:'1.5rem',
        fontWeight: '200',
      },
      address: {
        fontSize: '2rem',
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