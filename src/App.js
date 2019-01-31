import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("Title was clicked!");
  }
  render() {
    return (
      <div>
        <h1>Adoptable</h1>
        <Pet name="Bismarck" animal="Dog" breed="Shiba Inu" />
        <Pet name="Laika" animal="Dog" breed="Chihuahua" />
        <Pet name="Lucius" animal="Cat" breed="Black" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
