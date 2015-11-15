import React, {
  Component
}
from 'react';
import Header from '../../components/Header/Header';
import GeolocationService from '../../components/Map/GeolocationService';
import Radium from 'radium';
import AppointmentViewer from '../../components/AppointmentViewer/AppointmentViewer';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent';
import moment from 'moment';

@Radium
export default class Home extends Component {
  state = {
    pickedDate: '2015-10-08',
    pickedTime: '15:00',
    pickedPractitioner: 'Select Practice',
    datetime: moment().toISOString()
  }
  render() {
    const styles = require('./Home.scss');
    const {
      pickedDate, pickedTime, pickedPractitioner
    } = this.state;
    // const styles1 = require('../../components/SearchBar/SearchBar.scss');
    const ddStyle = require('../../components/SearchBar/DropdownStyle.css');
    const preventNotUsedErr = ddStyle.toString();
    console.log(preventNotUsedErr.charAt(1));
    return (
      <div className={styles.home}>
        <div style={{width: '100%', height: '100%', backgroundColor: '#B2EBF2'}}>
            <Header />
        </div>
        <div style={{width: '100%', height: '100%' }}>
          <div style={{width: '100%', position: 'relative', float: 'left',
            '@media (max-width:1150px)': {
              width: '100%'
            }
            }}>
            <SearchBarComponent/>
          </div>
          <div style={{width: '40%', position: 'relative', float: 'left',
              '@media (max-width:1150px)': {
                width: '100%'
              }
            }}>
            <AppointmentViewer date={pickedDate} time={pickedTime} practitioner={pickedPractitioner}/>
          </div>
          <div style={{width: '60%', border: '2px solid #999', borderBottom: '0px', position: 'relative', float: 'right', pointerEvents: 'none',
              '@media (max-width:1150px)': {
                width: '100%'
              }}}>
            <GeolocationService/>
          </div>
          </div>
        </div>
    );
  }
}

// @Radium
// export default class Home extends Component {
//   render() {
//     const styles = require('./Home.scss');
//     return (
//       <div className={styles.home}>
//         <div style={{width: '100%', height: '100%', backgroundColor: '#B2EBF2'}}>
//             <Header />
//         </div>
//         <div style={{width: '100%', height: '100%' }}>
//           <div style={{width: '40%', position: 'relative', float: 'left'}}>
//             <SearchBar />
//           </div>
//           <div style={{width: '60%', position: 'relative', float: 'right', pointerEvents: 'none'}}>
//             <GeolocationService/>
//           </div>
//           </div>
//         </div>
//     );
//   }
// }
