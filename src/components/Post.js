import React from "react";
import PropTypes from "prop-types";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Post(props) {
  return (
    <React.Fragment>
      <Card>
        <CardTitle>
          <h3 id="clickable">{props.poster}</h3>
        </CardTitle>
        {/* <h6>{props.dateTime}</h6> */}
        <p>{props.summary}</p>
        <p id="text" class="fullText">{props.fullText}</p>
        <hr />
      </Card>
    </React.Fragment>
  );
}

Post.propTypes = {
  poster: PropTypes.string,
  // dateTime: PropTypes.Date,
  summary: PropTypes.string,
  fullText: PropTypes.string,
};

export default Post;