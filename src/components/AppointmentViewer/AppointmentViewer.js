import React, {Component} from 'react';
import Radium from 'radium';
import PracticeList from './PracticeList/PracticeList';
// import Card from '../zComponents/Card/Card';
// import AppointmentDateTimePicker from '../SearchBar/AppointmentDateTimePicker';
// Somewhere we have to deal with the data inflows.
// This should probably appear here for now.

// TODO: Data handling
// TODO: Form submission in dialog (should probably happen at the component level :)

@Radium
export default class AppointmentViewer extends Component {
	render() {
		const {date, time} = this.props;
		// var practiceList = [];
		// this.props.practices.practice.forEach(function(practice) {
		// 	practiceList.push(<PracticeCard practice={practice}/>);
		// });
		console.log('AppointmentViewer', date)
		return (
			<div>
				<PracticeList date={date} time={time}/>
			</div>
		);
	}
}
