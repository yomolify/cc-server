import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PracticeList from './PracticeList/PracticeList';
import GeolocationService from '../Map/GeolocationService';

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
      <div>
        <div style={{width: '20%', margin: '0', height: '1000px'}}>
          <PracticeList date={date} time={time} practitioner={practitioner}/>
        </div>
        <div style={{width: '70.56%', float: 'right', position: 'absolute', left: '560px', top: '367px', pointerEvents: 'none'}}>
          <GeolocationService/>
        </div>
      </div>
    );
  }
}
