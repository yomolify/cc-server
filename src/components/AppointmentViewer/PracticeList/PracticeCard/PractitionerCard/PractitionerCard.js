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
    const text = 'More Times';
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
    const style = {
      card: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignContent: 'stretch',
        background: '#FFFFFF',
        borderTop: '1px solid #aaa',
        borderLeft: '5px solid #ddd',
        transitionDuration: '0.3s',
        ':hover': {
          background: '#eee'
        }
      },
      practice: {
        width: '80%'
      },
      times: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-around'
      },
      sticky: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'flex-end',
        width: '20%'
      }
    };
    return (
      <div style={style.card}>
          <div style={style.practice}>
            <PractitionerInfo firstName={this.props.practitioner.FirstName} lastName={this.props.practitioner.LastName} specialization={this.props.practitioner.Specialization} />
          </div>
          <div style={style.sticky}>
            <div style={style.times}>
              <ModalButton time={timeMinusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
              <ModalButton time={time} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
              <ModalButton time={timePlusOne} date={date} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
              <ModalButton time={timePlusOne} date={date} text={text} practitioner={this.props.practitioner.FirstName + ' ' + this.props.practitioner.LastName}/>
            </div>
          </div>
      </div>
    );
  }
}
