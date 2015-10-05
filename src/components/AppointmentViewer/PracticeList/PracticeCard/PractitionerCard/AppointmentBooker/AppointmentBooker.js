import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import DocumentMeta from 'react-document-meta';
import {initialize} from 'redux-form';
import AppointmentForm from './AppointmentForm/AppointmentForm';

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
  dispatch => bindActionCreators({initialize}, dispatch)
)

export default class AppointmentBooker extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit(data) {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('survey', {});
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

