import React, { Component } from 'react';
import AppointmentViewer from '../../components/AppointmentViewer/AppointmentViewer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/zComponents/Card/Card';
// import CardHeader from '../../components/zComponents/Card/CardHeader';
import Radium from 'radium';

@Radium
export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    //const logoImage = require('../../../static/cclogo_big.png');
    return (
      <div className={styles.home}>
          <div style={{width: '100%', height: '100%', backgroundColor: '#B2EBF2'}}>
              <SearchBar />
          </div>
      </div>
    );
  }
}
