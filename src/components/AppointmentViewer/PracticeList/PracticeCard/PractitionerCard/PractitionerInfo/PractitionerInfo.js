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
        fontWeight: '300',
        paddingLeft: '0.6em'
      },
      specialization: {
        fontSize: '1.5rem',
        fontWeight: '150',
        paddingLeft: '0.8em'
      },
      avatar: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'flex-start'
      },
      info: {
        display: 'flex',
        flexFlow: 'column'
      },
      svg: {
        width: '50px'
      }
    };
    const name = this.props.firstName + ' ' + this.props.lastName;
    return (
      <div>
        <div style={styles.avatar}>
          <svg style={styles.svg}>
             <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
               S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
               c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
               c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
               c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>
           </svg>
           <div style={styles.info}>
            <div style={styles.name}>{name}</div>
            <small style={styles.specialization}>{this.props.specialization}</small>
           </div>
        </div>
      </div>
    );
  }
}
