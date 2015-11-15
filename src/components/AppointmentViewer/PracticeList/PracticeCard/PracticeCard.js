import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';
import PracticeCardHeader from './PracticeCardHeader/PracticeCardHeader';
import PractitionerCardList from './PractitionerCardList/PractitionerCardList';

@Radium
export default class PracticeCard extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practice: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Address: PropTypes.string.isRequired,
      practitioners: PropTypes.string.isRequired
    }),
  }
  render() {
    const {
      date, time
    } = this.props;
    const cardStyles = {
      card: {
        border: '2px solid #999',
        background: '#FFFFFF',
        display: 'flex',
        flexFlow: 'column',
      },
      header: {
        background: '#ccc'
      }
    };
    return (

      <div style={{width: '100%'}}>
        <div style={cardStyles.card}>
          <div style={cardStyles.header}>
            <PracticeCardHeader practiceName={this.props.practice.Name} practiceAddress={this.props.practice.Address} date={date} time={time} />
          </div>
            <PractitionerCardList data={this.props.practice.practitioners} date={date} time={time}/>
        </div>
      </div>
    );
  }
}
