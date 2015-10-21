import React, {Component} from 'react';
import Radium from 'radium';
import PractitionerInfo from './PractitionerInfo/PractitionerInfo';
import ModalButton from '../../../../zComponents/ModalButton/ModalButton';
import moment from 'moment';

@Radium
export default class PractitionerCard extends Component {
  render() {
    const {date, time} = this.props;
    var showTime = moment(time, "HH:MM");
    var timeMinusOne = (Number(time.slice(0, 2))) - 1;
    timeMinusOne = timeMinusOne.toString() + ":00";
    var timePlusOne = (Number(time.slice(0, 2))) + 1;
    timePlusOne = timePlusOne.toString() + ":00";
    if ((Number(timeMinusOne.slice(0, 1))) > 1) {
      timeMinusOne = '0' + timeMinusOne
    }
    if ((Number(timePlusOne.slice(0, 1))) > 1) {
      timePlusOne = '0' + timePlusOne
    }
    // console.log("timeMinusOne", timeMinusOne)
    // console.log("time", time)
    // console.log("timePlusOne", timePlusOne)

    // console.log(showTime);
    // console.log(moment([showTime]).format("h A"));
    const childCardStyle = {
      card: {
        display: 'inline-block',
        background: '#FFFFFF',
        borderRadius: '10px',
        float: 'left',
        height: '150px',
        margin: '1rem',
        position: 'relative',
        width: '480px',
        padding: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transitionDuration: '0.3s',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        },
      },
    }
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
    }
    return ( 
      <div style={childCardStyle.card}>
        <PractitionerInfo firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
        <div >
          <ul  style={modalListStyle.ul}>
            <li style={modalListStyle.li}><ModalButton time={timeMinusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/></li>
            <li style={modalListStyle.li}><ModalButton time={time} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/></li>
            <li style={modalListStyle.li}><ModalButton time={timePlusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/></li>
          </ul>
        </div>
      </div>
    );
  }
}

