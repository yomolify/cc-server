import React, {
  Component, PropTypes
}
from 'react';
import Radium from 'radium';

// TODO: Data handling
// TODO: Form submission in dialog (should probably happen at the component level :)

@Radium
export default class Header extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }
  render() {
    const headerStyle = {
      div: {
        width: '100%',
        margin: '0px 0px 0px',
        backgroundColor: '#CADFAA',
        height: '350px'
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
    };
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
