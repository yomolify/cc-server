import React, {Component, PropTypes} from 'react';
import Modal from 'react-modal';
import AppointmentBooker from '../AppointmentBooker/AppointmentBooker.js';

const baseStyles = {
  background: 'RGBA(176, 235, 243, 0.8)',
  border: 0,
  borderRadius: 4,
  color: 'RGBA(119, 119, 119, 1)',
  padding: '0.7em'
};

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    transitionDuration: '.5s',
    backgroundColor   : 'rgba(255, 255, 255, 0.30)'
  },
  content : {
    position                   : 'absolute',
    top                        : '80px',
    left                       : '100px',
    right                      : '100px',
    bottom                     : '300px',
    border                     : '2px solid #ccc',
    background                 : '#EAFDFF',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '10px',
    outline                    : 'none',
    transitionDuration: '.5s',
    padding                    : '20px'
  }
};
export default class ModalButton extends Component {
  state = {
    modalIsOpen: false
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  static propTypes = {
    modalIsOpen: PropTypes.bool,
    time: PropTypes.string
  }
  render() {
    const {modalIsOpen} = this.state;
    const {date, time, practitioner} = this.props;
    console.log('date', date);
    var correctedTime;
    // console.log((Number(time.slice(0, 2))))
    if ((Number(time.slice(0, 2) > 12))) {
      correctedTime = (Number(time.slice(0, 2))) - 12;
      console.log(correctedTime);
      correctedTime = correctedTime.toString() + ':00';
      console.log(correctedTime);
      if ((Number(time.slice(0, 2) > 10))) {
        correctedTime = '0' + correctedTime;
      }
    }
    else {
      correctedTime = time;
    }
    console.log('modalIsOpen', modalIsOpen);
    const style = require('./ModalButton.scss');
    return (
      <div>
      <br/>
        <button style={baseStyles} onClick={::this.openModal}>Book @ {correctedTime} {(Number(time.slice(0, 2)) < 12 ? 'AM' : 'PM')}</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={::this.closeModal}
          style={customStyles}>
          <h3>Book Appointment with Dr {practitioner} for {correctedTime} {(Number(time.slice(0, 2)) < 12 ? 'AM' : 'PM')}</h3>
          <div style={{width: '100%', height: '100X'}}>
          <AppointmentBooker style={{fontFamily: "Helvetica Neue"}} practitioner={practitioner} time={time} date={date}/>
          </div>
        </Modal>
      </div>
    );
  }
}

// <button style={baseStyles} onClick={::this.closeModal}>Cancel</button>
