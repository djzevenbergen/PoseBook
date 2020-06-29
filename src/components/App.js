import React from 'react';
import './../index.css';
import Navbar from "./Menu.js";
import Search from "./Search.js";
import UserProfile from "./UserProfile.js";
import UserMetrics from "./UserMetrics.js";
import Post from "./Post.js";
import PostFeed from "./PostFeed.js";

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
            <UserMetrics />
          </Col>
          <Col m="6">
            <PostFeed />
          </Col>
          <Col sm="3">
            <UserProfile likes="2" />
          </Col>
        </Row>
      </header>
    </div >
  );
}


document.onreadystatechange(function () {
  let element = document.getElementById("post-show");
  let toBeShown = document.getElementById("text");

  element.click(function () {
    console.log("hi there");
    toBeShown.removeClass("fullText");
  });
});
export default App;
