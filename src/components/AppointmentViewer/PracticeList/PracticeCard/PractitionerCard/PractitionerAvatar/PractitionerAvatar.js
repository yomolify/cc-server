import React, {Component} from 'react';


export default class PractitionerAvatar extends Component {
 render() {

  var divStyle = {
    backgroundPosition: '50% 50%',
    borderBottomLeftRadius: '54.0541px',
    borderBottomRightRadius: '54.0541px',
    borderTopLeftRadius: '54.0541px',
    borderTopRightRadius: '54.0541px',
    boxSizing: 'border-box',
    float: 'left',
    height: '108.108px',
    marginBottom: '0px',
    marginLeft: '0px',
    marginRight: '20.2703px',
    marginTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    width: '56px',
  };
  return (
   <div style={divStyle}>
    <p>Profile Picture</p>
   </div>
  );
 }
}
