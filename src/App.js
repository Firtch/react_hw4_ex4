import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  languages = ["html", "css", "js", "php"];

  render() {
    return (
      <div className="App">
        <ul>
          {this.languages.map((l) => {
            return <li>{l}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
