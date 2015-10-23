import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PractitionerInfo from './PractitionerInfo/PractitionerInfo';
import ModalButton from '../../../../zComponents/ModalButton/ModalButton';

@Radium
export default class PractitionerCard extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practitioner: PropTypes.shape({
      FirstName: PropTypes.string.isRequired,
      LastName: PropTypes.string.isRequired,
      Specialization: PropTypes.string.isRequired
    })
  }
  render() {
    const {
      date, time
    } = this.props;
    let timeMinusOne = (Number(time.slice(0, 2))) - 1;
    timeMinusOne = timeMinusOne.toString() + ':00';
    let timePlusOne = (Number(time.slice(0, 2))) + 1;
    timePlusOne = timePlusOne.toString() + ':00';
    if ((Number(timeMinusOne.slice(0, 1))) > 1) {
      timeMinusOne = '0' + timeMinusOne;
    }
    if ((Number(timePlusOne.slice(0, 1))) > 1) {
      timePlusOne = '0' + timePlusOne;
    }
    const childCardStyle = {
      card: {
<<<<<<< HEAD
        display: 'inline-block',
=======
        display: 'flex',
        flexFlow: 'column',
>>>>>>> temp
        background: '#FFFFFF',
        borderTop: '1px solid blanchedalmond',
        height: '150px',
<<<<<<< HEAD
        margin: '1rem',
        position: 'relative',
        width: '480px',
        padding: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
=======
        padding: '10px',
>>>>>>> temp
        transitionDuration: '0.3s',
        ':hover': {
          background: 'blanchedalmond'
        },
      },
    };
<<<<<<< HEAD
    const modalListStyle = {
      li: {
        float: 'left',
        display: 'inline-block',
        margin: '1.1em',
      },
      ul: {
        // list-style-type: 'none',
        margin: '-1em',
        padding: '0.1em',
        overflow: 'hidden'
      }
    };
    return (
      <div style={childCardStyle.card}>
        <PractitionerInfo firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
        <div >
          <ul  style={modalListStyle.ul}>
            <li style={modalListStyle.li}><ModalButton time={timeMinusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/></li>
            <li style={modalListStyle.li}><ModalButton time={time} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/></li>
            <li style={modalListStyle.li}><ModalButton time={timePlusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/></li>
          </ul>
=======
    return (
      <div style={childCardStyle.card}>
        <PractitionerInfo firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
        <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-around'}}>
            <ModalButton time={timeMinusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
            <ModalButton time={time} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
            <ModalButton time={timePlusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
>>>>>>> temp
        </div>
      </div>
    );
  }
}
