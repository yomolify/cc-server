import React, {Component} from 'react';
import Radium from 'radium';
import PracticeList from './PracticeList/PracticeList';
import SimpleMapPage from '../Map/SimpleMapPage';
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
				<div style={{width: '20%', margin: '0'}}>
					<PracticeList date={date} time={time}/>
				</div>
				<div style={{width: '68.4%', float: 'right', position: 'absolute', left:' 600px', top: '90px'}}>
					<SimpleMapPage/>
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