import React from 'react';
import './../index.css';
import Navbar from "./Menu.js";
import Search from "./Search.js";
import UserProfile from "./UserProfile.js";

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">

        <Row>
          <Navbar />
          <Search />
        </Row>
        <Row>
          <Col sm="3">
            <UserProfile />
          </Col>
          <Col m="6">
            <UserProfile />
          </Col>
          <Col sm="3">
            <UserProfile />
          </Col>
        </Row>
      </header>
    </div >
  );
}


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div>
//           <h1>hi</h1>
//         </div>
//       </div>
//     )
//   }
// }

export default App;
