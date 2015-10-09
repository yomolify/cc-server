import React, {Component} from 'react';
import Radium from 'radium';

// TODO: Data handling
// TODO: Form submission in dialog (should probably happen at the component level :)

@Radium
export default class Header extends Component {
	render() {
		const {date, time} = this.props;
		// var practiceList = [];
		// this.props.practices.practice.forEach(function(practice) {
		// 	practiceList.push(<PracticeCard practice={practice}/>);
		// });
		const headerStyle = {
		      div: {
		        width: '100%',
		        margin: '0px 0px -15px',
		        backgroundColor: '#CADFAA',
		        height: '350px'
		        // margin: '1.1em',
		      },
		      mainText: {
		      	    fontSize: '7em',
				    position: 'absolute',
				    left: '200px',
				    top: '90px',
				    color: 'beige'
		      },
		      login: {
		      	    fontSize: '4em',
				    position: 'absolute',
				    right: '200px',
				    top: '120px',
				    color: 'beige'
		      }
		    }
		return (
			<div>
				<div style={headerStyle.div}>
					<div style={headerStyle.mainText}>
						CARECRU
					</div>
					<div style={headerStyle.login}>
						Login or Signup
					</div>
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