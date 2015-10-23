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
      Practitioners: PropTypes.string.isRequired
    }),
  }
  render() {
    const {
      date, time
    } = this.props;
    const cardStyles = {
      card: {
        background: '#FFFFFF',
        border: '7px solid blanchedalmond',
        display: 'flex',
        flexFlow: 'column',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        },
      },
    };
    return (

      <div style={{width: '100%'}}>
        <div style={cardStyles.card}>
            <PracticeCardHeader practiceName={this.props.practice.Name} practiceAddress={this.props.practice.Address} date={date} time={time} />
            <PractitionerCardList data={this.props.practice.Practitioners} date={date} time={time}/>
        </div>
      </div>
    );
  }
}
