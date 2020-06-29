import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import UserMetrics from "./UserMetrics.js";

// class UserProfile extends React.Component {
//   render(props) {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }
function UserProfile(props) {
  return (
    <React.Fragment>
      <Card id="card">
        <CardImg top width="70%" src="https://cdn11.bigcommerce.com/s-kjbnzo2/images/stencil/1200x1800/products/14687/20092/SQ_011__30602.1460043103.jpg?c=2" height="100px" alt="Card image cap" />
        <CardBody>
          <CardTitle id="card-name">Name</CardTitle>

          <CardText id="metric-labels">
            <table >
              <tr>
                <th>POSTS&nbsp;&nbsp;</th>
                <th>FOLLOWERS&nbsp;&nbsp;</th>
                <th>HATERS&nbsp;&nbsp;</th>
              </tr>
              <tr>
                <td>{props.posts}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.followers}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.haters}</td>
              </tr>
            </table>


          </CardText>
        </CardBody>
      </Card>
    </React.Fragment >
  );
}

export default UserProfile;