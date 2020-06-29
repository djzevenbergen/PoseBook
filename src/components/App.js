import React from 'react';
import './../index.css';
import Navbar from "./Menu.js";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
      </header>
    </div>
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
