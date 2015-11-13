import React, {
  Component, PropTypes
}
from 'react';
import Modal from 'react-modal';
import AppointmentBooker from '../AppointmentBooker/AppointmentBooker.js';
import Radium from 'radium';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transitionDuration: '.5s',
    border: '5px solid #ccc'
  },
  content: {
    fontFamily: 'Helvetica Neue',
    position: 'absolute',
    left: '400px',
    right: '400px',
    bottom: '200px',
    border: '5px solid #ccc',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    transitionDuration: '.5s',
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
      borderRadius: 4,
      background: '#eee',
      transitionDuration: '0.3s',
      ':hover': {
        background: '#ccc'
      }
    };
    const {
      modalIsOpen
    } = this.state;
    const {
      date, time, practitioner
    } = this.props;
    let correctedTime;
    if ((Number(time.slice(0, 2) > 12))) {
      correctedTime = (Number(time.slice(0, 2))) - 12;
      correctedTime = correctedTime.toString() + ':00';
      if ((Number(time.slice(0, 2) > 10))) {
        correctedTime = '0' + correctedTime;
      }
    } else {
      correctedTime = time;
    }
    return (
      <div>
        <button style={baseStyles} onClick={::this.openModal}>{correctedTime} {(Number(time.slice(0, 2)) < 12 ? 'AM' : 'PM')}</button>
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
