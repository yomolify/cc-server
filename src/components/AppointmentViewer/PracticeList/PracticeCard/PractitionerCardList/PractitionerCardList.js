import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import PractitionerCard from '../PractitionerCard/PractitionerCard';

@Radium
export default class PractitionerCardList extends Component {
  render() {
    var practitionerCardNodes = this.props.data.map(function (practitioner) {
      return (
        <PractitionerCard practitioner={practitioner}>
        </PractitionerCard>
      );
    });
    return (
      <div className="practitionerCards">
        {practitionerCardNodes}
      </div>
    );
  }
}
//   render() {
//       var practitionerCardNodes = this.props.data.map(function (practitioner) {
//         return (
//           <PractitionerCard practitioner={practitioner}>
//           </PractitionerCard>
//         );
//       });
//     return (
//       <div className="practitionerCards">
//         {practitionerCardNodes}
//       </div>
//     );
//   }
// }
