import React from 'react';

function UserMetrics(props) {
  return (
    <React.Fragment>
      <ul>
        <li><h6>{props.posts}</h6></li>
        <li><h6>{props.following}  </h6></li>
        <li><h6>{props.followers}</h6></li>
      </ul>
    </React.Fragment>
  );
}


export default UserMetrics;

