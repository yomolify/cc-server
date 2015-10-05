import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import DocumentMeta from 'react-document-meta';
import {initialize} from 'redux-form';
import AppointmentForm from './AppointmentForm/AppointmentForm';
import * as bookActions from '../../../redux/modules/book';
import moment from 'moment';

// <Modal>
//   <ModalHeader text="Modal Header" />
//   <ModalBody>
//     <form>[...]</form>
//   </ModalBody>
//   <ModalFooter>
//     <Button type="primary">Modal Footer</Button>
//     <Button type="link-cancel">Button</Button>
//   </ModalFooter>
// </Modal>

@connect(
  () => ({}),
  dispatch => bindActionCreators(bookActions, dispatch)
)

export default class AppointmentBooker extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    book: PropTypes.func.isRequired
  }

  handleSubmit(data) {
    var dateTime = this.props.date + ' ' + this.props.time;
    var sendDateTime = moment(dateTime);
    // console.log(sendDateTime.toISOString())
    // let date = moment(data.time, "H:MM a");
    // let calTime = moment(date).calendar();
    // window.alert('Appointment Booked with' + calTime);
    console.log('this.props.practitioner', this.props.practitioner)
    console.log('data.patientName', data.patientName)
    console.log('sendDateTime', sendDateTime);

    this.props.book(this.props.practitioner, data.patientName, sendDateTime.toISOString());
  }

  render() {
    return (
        <div style={{width: '100%', height: '100X'}}>
        <AppointmentForm onSubmit={::this.handleSubmit}/>
      </div>
    );
  }
}
          // If the user desires a button to intialize hint text in the form.
          // <button className="btn btn-primary" onClick={::this.handleInitialize}>
          //   <i className="fa fa-pencil"/> Initialize Form
          // </button>

