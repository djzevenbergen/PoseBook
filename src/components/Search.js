import React from "react";

function Search() {
  return (
    <React.Fragment>
      <ul id="search">
        <li>
          <form id="search-bar">
            <input type="text" placeholder="Search"></input>
          </form>
        </li>
        <li>
          <form id="find-friends">
            <input type="text" placeholder="Find Friends"></input>
          </form>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Search;