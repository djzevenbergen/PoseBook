import React from "react";
import Post from "./Post.js";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const masterPostList = [
  {
    poster: "Jim Higgins",
    summary: "I love....",
    fullText: "I love cheese if you didn't already know."
  },
  {
    poster: "Big Fly",
    summary: "Bzzzzz....",
    fullText: "Bzzzzzzzzzzzzzzzzzzz bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz bzzzzzzzzzzzzzzzzzzzz"
  },
  {
    poster: "Kim",
    summary: "I am truly....",
    fullText: "I am truly in awe of the inadequecy of human speech to conceptualize time."
  },
  {
    poster: "Your Friend's Mom",
    summary: "Joke: I went to the store...",
    fullText: "Joke: I went to the store, and we were all wearing masks.  I brought home the wrong husband! Let me know if you have mine in your cart!"
  }
];

function PostFeed() {
  return (
    <React.Fragment>
      <Card>
        <CardTitle id="feed-title">
          <p></p>
          <input type="text" placeholder="got something to say?"></input>
          <button id="post-show" type="button">Show them posts</button>
          <p></p>

        </CardTitle>

        {masterPostList.map((post, index) =>
          <Post poster={post.poster}
            summary={post.summary}
            fullText={post.fullText}
            key={index} />
        )}
      </Card>
    </React.Fragment >
  );

}

export default PostFeed;