import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PracticeList from './PracticeList/PracticeList';

@Radium
export default class AppointmentViewer extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practitioner: PropTypes.string.isRequired,
  }
  onscroll() {
    console.log('scrolling');
  }
  onmouseover() {
    console.log('mouseover');
  }
  render() {
    const {
      date, time, practitioner
    } = this.props;

    return (
          <PracticeList date={date} time={time} practitioner={practitioner}/>
    );
  }
}
