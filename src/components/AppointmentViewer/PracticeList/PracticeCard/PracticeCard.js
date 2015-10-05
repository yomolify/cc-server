import React, {Component} from 'react';
import Radium from 'radium';
import PracticeCardHeader from './PracticeCardHeader/PracticeCardHeader';
import PractitionerCardList from './PractitionerCardList/PractitionerCardList';

@Radium
export default class PracticeCard extends Component {
  render() {
    const {date, time} = this.props;
    const cardStyles = {
      card: {
        background: '#FFFFFF',
        borderRadius: '10px',
        float: 'left',
        padding: '10px',
        marginTop: '6em',
        marginLeft: '2em',
        marginRight: '2em',
        marginBottom: '2em',
        position: 'relative',
        width: '520px',
        transitionDuration: '.4s',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
        },
    };
    return (
      <div style={{height: '600px', length:'500px', position:'relative'}}>
        <div key='one' style={cardStyles.card}>
          <PracticeCardHeader practiceName={this.props.practice.Name} practiceAddress={this.props.practice.Address} date={date} time={time} />
          <PractitionerCardList data={this.props.practice.Practitioners} date={date} time={time}/>
        </div>
      </div>
    );
  }
}
