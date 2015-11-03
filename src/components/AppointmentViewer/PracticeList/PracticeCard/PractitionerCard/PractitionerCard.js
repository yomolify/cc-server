import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PractitionerInfo from './PractitionerInfo/PractitionerInfo';
import ModalButton from '../../../../zComponents/ModalButton/ModalButton';

@Radium
export default class PractitionerCard extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practitioner: PropTypes.shape({
      FirstName: PropTypes.string.isRequired,
      LastName: PropTypes.string.isRequired,
      Specialization: PropTypes.string.isRequired
    })
  }
  render() {
    const {
      date, time
    } = this.props;
    let timeMinusOne = (Number(time.slice(0, 2))) - 1;
    timeMinusOne = timeMinusOne.toString() + ':00';
    let timePlusOne = (Number(time.slice(0, 2))) + 1;
    timePlusOne = timePlusOne.toString() + ':00';
    if ((Number(timeMinusOne.slice(0, 1))) > 1) {
      timeMinusOne = '0' + timeMinusOne;
    }
    if ((Number(timePlusOne.slice(0, 1))) > 1) {
      timePlusOne = '0' + timePlusOne;
    }
    const childCardStyle = {
      card: {
        display: 'flex',
        flexFlow: 'column',
        background: '#FFFFFF',
        borderTop: '1px solid #2778C7',
        borderLeft: '5px solid #8EC51F',
        height: '150px',
        padding: '10px',
        transitionDuration: '0.3s',
        ':hover': {
          background: '#2778C7'
        },
      },
      info: {
        height: '4em'
      },
      avatar: {
        borderRadius: '1px'
      }
    };
    return (
      <div style={childCardStyle.card}>
        <div style={childCardStyle.info}>
          <PractitionerInfo firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
        </div>
        <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-around', marginLeft: '24px'}}>
            <ModalButton time={timeMinusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
            <ModalButton time={time} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
            <ModalButton time={timePlusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
        </div>
      </div>
    );
  }
}
