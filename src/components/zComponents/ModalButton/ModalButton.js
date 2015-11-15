import React, {
  Component, PropTypes
}
from 'react';
import Modal from 'react-modal';
import AppointmentBooker from '../AppointmentBooker/AppointmentBooker.js';
import Radium from 'radium';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    position: 'absolute'
  },
  content: {
    width: '40%',
    left: '40.1%',
    marginTop: '24.8%',
    border: '1px solid #ccc',
    position: 'relative',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '1px',
    padding: '20px'
  }
};
@Radium
export default class ModalButton extends Component {
  static propTypes = {
    modalIsOpen: PropTypes.bool,
    time: PropTypes.string,
    date: PropTypes.string,
    practitioner: PropTypes.string,
    text: PropTypes.string
  }
  state = {
    modalIsOpen: false
  }
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  render() {
    const baseStyles = {
      fontWeight: '600',
      display: 'inline-block',
      overflow: 'hidden',
      padding: '0.2em',
      marginTop: '0.3em',
      margin: '0.2em',
      width: '7em',
      background: 'none',
      border: '2px solid #aaa',
      borderRadius: 2,
      boxShadow: '1px 1px 3px #aaa',
      color: '#777',

      transitionDuration: '0.3s',
      ':hover': {
        background: '#ccc'
      },
      ':focus': {
        outline: '0'
      }
    };
    const moreTimes = {
      fontWeight: '600',
      display: 'inline-block',
      overflow: 'hidden',
      padding: '0.2em',
      margin: '0.2em',
      marginBottom: '0.4em',
      height: '2.8em',
      width: '7em',
      background: 'none',
      border: '2px solid #aaa',
      borderRadius: 2,
      boxShadow: '1px 1px 3px #aaa',
      color: '#777',
      transitionDuration: '0.3s',
      ':hover': {
        background: '#ccc'
      },
      ':focus': {
        outline: '0'
      }
    };
    const {
      modalIsOpen
    } = this.state;
    const {
      date, time, practitioner, text
    } = this.props;
    let correctedTime;
    if ((Number(time.slice(0, 2) > 12))) {
      correctedTime = (Number(time.slice(0, 2))) - 12;
      correctedTime = correctedTime.toString() + ':00';
      if ((Number(time.slice(0, 2) > 10))) {
        correctedTime = '' + correctedTime;
      }
    } else {
      correctedTime = time;
    }
    console.log(text);
    return (
      <div>
        <button style={(text === 'More Times' ? moreTimes : baseStyles)} onClick={::this.openModal}>{(text === 'More Times' ? text : (correctedTime + (Number(time.slice(0, 2)) < 12 ? ' AM' : ' PM')))}</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={::this.closeModal}
          style={customStyles}>
          <h3 style={{fontFamily: 'Helvetica Neue'}}>Book Appointment with Dr {practitioner} for {correctedTime} {(Number(time.slice(0, 2)) < 12 ? 'AM' : 'PM')}</h3>
          <div style={{width: '100%', height: '100X'}}>
          <AppointmentBooker style={{fontFamily: 'Helvetica Neue'}} practitioner={practitioner} time={time} date={date}/>
          </div>
        </Modal>
      </div>
    );
  }
}
