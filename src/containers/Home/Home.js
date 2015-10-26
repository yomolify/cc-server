import React, {
  Component
}
from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import GeolocationService from '../../components/Map/GeolocationService';
import Radium from 'radium';

@Radium
export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div style={{width: '100%', height: '100%', backgroundColor: '#B2EBF2'}}>
            <Header />
        </div>
        <div style={{width: '100%', height: '100%' }}>
          <div style={{width: '40%', position: 'relative', float: 'left',
            '@media (max-width:1150px)': {
              width: '100%'
            }
            }}>
          <SearchBar />
          </div>
          <div style={{width: '60%', position: 'relative', float: 'right', pointerEvents: 'none',
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
