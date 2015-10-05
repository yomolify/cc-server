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
    transitionDuration: '.3s',
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '80px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '300px',
    border                     : '2px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '10px',
    outline                    : 'none',
    transitionDuration: '.3s',
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
    const {time, practitioner} = this.props;
    console.log('modalIsOpen', modalIsOpen);
    const style = require('./ModalButton.scss');
    return (
      <div>
      <br/>
        <button style={baseStyles} onClick={::this.openModal}>Book @ {time}</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={::this.closeModal}
          style={customStyles}>
          <h2>Book Appointment with Dr {practitioner} @ {time}</h2>
          <AppointmentBooker practitioner={practitioner} time={time}/>
        </Modal>
      </div>
    );
  }
}

// <button style={baseStyles} onClick={::this.closeModal}>Cancel</button>
