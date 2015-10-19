import React, {Component} from 'react';
import Radium from 'radium';
import PracticeList from './PracticeList/PracticeList';
import SimpleMapPage from '../Map/SimpleMapPage';
import GeolocationService from '../Map/GeolocationService';

// import Card from '../zComponents/Card/Card';
// import AppointmentDateTimePicker from '../SearchBar/AppointmentDateTimePicker';
// Somewhere we have to deal with the data inflows.
// This should probably appear here for now.

// TODO: Data handling
// TODO: Form submission in dialog (should probably happen at the component level :)

@Radium
export default class AppointmentViewer extends Component {
	render() {
		const {date, time, practitioner} = this.props;
		// var practiceList = [];
		// this.props.practices.practice.forEach(function(practice) {
		// 	practiceList.push(<PracticeCard practice={practice}/>);
		// });
		const listStyle = {
		      li: {
		        float: 'left',
		        display: 'inline-block',
		        // margin: '1.1em',
		      },
		      ul: {
		          // list-style-type: 'none',
		          // margin: '-1em',
		          padding: '0.1em',
		      }
		    }
		console.log('AppointmentViewer', date)
		return (
			<div>
				<div style={{width: '20%', margin: '0', height: '1000px'}}>
					<PracticeList date={date} time={time} practitioner={practitioner}/>
				</div>
				<div style={{width: '70.56%', float: 'right', position: 'absolute', left:' 560px', top: '367px'}}>
					<GeolocationService/>
				</div>
			</div>
		);
	}
}

// <ul style={listStyle.ul}>
// 					<li style={listStyle.li}><PracticeList date={date} time={time}/></li>
// 					<li style={listStyle.li}><SimpleMapPage /></li>
// 				</ul>

	// <div>
	// 				<li style={listStyle.li}>
	// 					<div>
	// 					</div>
	// 				</li>
	// 			</div>