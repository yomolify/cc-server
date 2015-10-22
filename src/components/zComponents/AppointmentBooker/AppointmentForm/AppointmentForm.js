import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
import {connectReduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// import DocumentMeta from 'react-document-meta';
// import * as bookActions from 'redux/modules/book';
// import {isLoaded as isAuthLoaded, load as loadAuth} from 'redux/modules/auth';
// import { Link } from 'react-router';
// import moment from 'moment';

@connectReduxForm({
  form: 'appointmentForm',
  fields: ['patientName', 'patientEmail', 'patientPhoneNumber', 'patientPostalCode', 'patientGender']
  // state => ({user: state.auth.user, token: state.auth.token}),
  // dispatch => bindActionCreators(bookActions, dispatch)
})
export default
class AppointmentForm extends Component {
  static propTypes = {
    fields: PropTypes.any,
    handleSubmit: PropTypes.func,
  }

  render() {
    const{
      fields: {patientName, patientEmail, patientPhoneNumber, patientPostalCode},
      handleSubmit
      } = this.props;
    // const styles = require('./AppointmentForm.scss');

    const renderInput = (field, label) =>
         <div style={{padding: '10px'}}>
            <label>{label}</label><input type="text" className="form-control" id={field.name} {...field}/>
        </div>;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        {renderInput(patientName, 'Full Name')}
        {renderInput(patientEmail, 'Email')}
        {renderInput(patientPhoneNumber, 'Phone number')}
        {renderInput(patientPostalCode, 'Postal code')}
         <div className="form-group">
            <div style={{align: 'left', padding: '25px'}}>
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
            </div>
          </div>
        </form>
    );
  }
}
