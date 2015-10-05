import React, { Component} from 'react';
import Radium from 'radium';


@Radium
export default class CardHeader extends Component {
    render() {
      return (
        <div style={{position: 'absolute', zIndex: '2', fontStyle:'Roboto', width: '100%', padding: '15px', height:'50px', textAlign: 'center'}}>
        </div>
      );

    }
}