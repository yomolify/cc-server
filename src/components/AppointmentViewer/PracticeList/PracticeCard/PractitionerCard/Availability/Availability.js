import React, {Component} from 'react';
import FirstAvailableButton from './FirstAvailableButton/FirstAvailableButton';
import ShowAdditionalTimesButton from './ShowAdditionalTimesButton/ShowAdditionalTimesButton';

export default class  extends Component {

 // TODO: we need a componentWillRecieveProps() function that is responsible for updating props when the map moves.:

 render() {
  //   const divStyle = {
  //    boxSizing:'border-box',
  //    color:'rgb(68, 68, 68)',
  //    cursor:'auto',
  //    display:'block',
  //    float:'left',
  //    fontFamily:'Roboto, Arial, sans-serif',
  //    fontSize:'16px',
  //    fontStyle:'normal',
  //    fontWeight:'200',
  //    listStyleImage:'none',
  //    listStylePosition:'outside',
  //    listStyleType:'none',
  //    textAlign:'left',
  //    whiteSpace:'normal',
  // }
   let firstAvailableDate = '';
   const date = new Date();
   const nextDate = date + 1;
   const today = date.toString();
   const tomorrow = nextDate.toString();
   if (this.props.availability[0] == today) {
    firstAvailableDate = 'Today';
   } else if (this.props.availability.slice(1,1) === tomorrow) {
    firstAvailableDate = 'Tomorrow';
   } else
    firstAvailableDate = this.props.availability;
  return (
   <div style={{width: '100%'}}>
    <div style={{float: 'left', width: '50%', marginTop: '20px'}}>
     <FirstAvailableButton firstAvailableDate={firstAvailableDate}/>
    </div>
    <div style={{float: 'right', width: '50%', marginTop: '20px'}}>
     <ShowAdditionalTimesButton />
    </div>
   </div>
  );
 }
}
