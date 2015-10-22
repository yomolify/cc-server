import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PractitionerCard from '../PractitionerCard/PractitionerCard';

@Radium
export default class PractitionerCardList extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired
  }
  render() {
    const {
      date, time, data
    } = this.props;
    /*eslint-disable */
    const practitionerCardNodes = data.map(function(practitioner) {
      return (
        <PractitionerCard practitioner={practitioner} date={date} time={time}/>
      );
    });
    /*eslint-enable */
    return (
      <div className="practitionerCards">
        {practitionerCardNodes}
      </div>
    );
  }
}
