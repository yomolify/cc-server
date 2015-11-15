import React, {
  Component, PropTypes
}
from 'react';
// import Radium from 'radium';
import PracticeCard from './PracticeCard/PracticeCard';
import {connect} from 'react-redux';

@connect(
  state => ({practices: state.auth.practices}))
export default class PracticeList extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practices: PropTypes.any.isRequired
  }

  render() {
    const {
      date, time, practices
    } = this.props;
    let practiceCardNodes;
    /*eslint-disable */
    if (practices.constructor === Array) {
      practiceCardNodes = practices.map(function(practice) {
        return (
            <PracticeCard practice={practice} date={date} time={time}/>
          )
      })
    }
    /*eslint-enable */
    return (
      <div style={{overflow: 'scroll', overflowX: 'hidden', ':-webkit-scrollbar': {width: '1px'}, height: '955px', width: '100%', display: 'flex', flexDirection: 'column' }}>{practiceCardNodes}</div>
    );
  }
}
