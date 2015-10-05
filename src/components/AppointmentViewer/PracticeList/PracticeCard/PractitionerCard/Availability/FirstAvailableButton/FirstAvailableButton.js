import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody} from 'elemental';
import {Pill} from 'elemental';
// import AppointmentForm from '../../AppointmentBooker/AppointmentForm/AppointmentForm';
import AppointmentBooker from '../../AppointmentBooker/AppointmentBooker';


export default class FirstAvailableButton extends Component {
 state = {
   modalIsOpen: false
 }

 toggleModal(visible) {
   this.setState({
     modalIsOpen: visible
   });
 }

 render() {
   const Day = this.props.day;
   const Time = this.props.time;
   const Practitioner = this.props.practitioner;
   const PracticeAddress = '1233 West 4th Avenue, Vancouver, BC'; //this.props.practice.address;

  // const Time = this.props.firstAvailableDate;


   const headerTitleStyle = {color: '#FFFFFF',
        textAlign: 'center',
        fontColor: '#009999',
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: '30'};

   const headerTextStyle = {color: '#FFFFFF',
        textAlign: 'left',
        fontColor: '#009999',
        fontFamily: 'Roboto, Arial, sans-serif',
        fontStyle: 'bold',
        fontWeight: '200',
        fontSize: '20'};
   return (
   <div>
   <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal.bind(this, false)} backdropClosesModal>
    <ModalHeader showCloseButton onClose={this.toggleModal.bind(this, false)}>
            <div style={{background: '#00ACC1', width: '100%', height: '200px', borderRadius: '5', overflow: 'hidden'}}>
             <div style={{padding: '10px'}}>
              <p style={headerTitleStyle}>Book an appointment with Dr. {Practitioner}</p>
              <p style={headerTextStyle}>Date: {Day}</p>
              <p style={headerTextStyle}>Time: {Time}</p>
              <p style={headerTextStyle}>Where: {PracticeAddress}</p>
             </div>
            </div>
    </ModalHeader>
    <ModalBody><AppointmentBooker /></ModalBody>
   </Modal>
   <Pill style={{fontFamily: 'Roboto, Arial, sans-serif'}} label="Today, 12:30" type="success-inverted" onClick={this.toggleModal.bind(this, true)} />
   </div>
  );
 }
}

