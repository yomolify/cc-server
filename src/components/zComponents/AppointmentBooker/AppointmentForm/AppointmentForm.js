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
  fields: ['patientName', 'patientEmail', 'patientPhoneNumber', 'patientSex', 'patientGender']
  // state => ({user: state.auth.user, token: state.auth.token}),
  // dispatch => bindActionCreators(bookActions, dispatch)
})
export default class AppointmentForm extends Component {
  static propTypes = {
    fields: PropTypes.any,
    handleSubmit: PropTypes.func,
  }

  render() {
    const button = {
      padding: '1em',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
      marginBottom: '1em'
    };
    const baseStyles = {
      fontSize: '1.5em',
      fontWeight: '600',
      display: 'inline-block',
      overflow: 'hidden',
      padding: '0.7em',
      marginTop: '0.3em',
      margin: '0.2em',
      width: '12em',
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
    const successStyles = {
      fontSize: '1.5em',
      fontWeight: '600',
      display: 'inline-block',
      overflow: 'hidden',
      padding: '0.7em',
      marginTop: '0.3em',
      margin: '0.2em',
      width: '12em',
      background: '#666',
      border: '2px solid #aaa',
      borderRadius: 2,
      boxShadow: '1px 1px 3px #aaa',
      color: '#eee',

      transitionDuration: '0.3s',
      ':hover': {
        background: '#ccc'
      },
      ':focus': {
        outline: '0'
      }
    };
    const input = {
      width: '40%'
    };
    const labelStyle = {
      fontFamily: 'Helvetica',
      textAlign: 'left',
      width: '20%',
      fontSize: '1.5em'
    };
    const inputDiv = {
      padding: '1em',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'center'
    };
    const formStyle = {
      paddingTop: '2em',
      paddingBottom: '1.3em'
    };
    const{
      fields: {patientName, patientEmail, patientPhoneNumber, patientSex},
      handleSubmit
      } = this.props;
    // const styles = require('./AppointmentForm.scss');

    const renderInput = (field, label) =>
       <div style={inputDiv}>
          <span style={labelStyle}>{label}</span><input style={input} type="text" className="form-control" id={field.name} {...field}/>
       </div>;

    return (
      <form style={formStyle} onSubmit={handleSubmit}>
        {renderInput(patientName, 'Full Name')}
        {renderInput(patientEmail, 'Email')}
        {renderInput(patientPhoneNumber, 'Phone ')}
        {renderInput(patientSex, 'Sex')}
          <div style={button}>
            <button style={baseStyles} onClick={handleSubmit}>
              <i className="fa fa-paper-plane"/> Cancel
            </button>
            <button style={successStyles} onClick={handleSubmit}>
              <i className="fa fa-paper-plane"/> Submit
            </button>
          </div>
        </form>
    );
  }
}
