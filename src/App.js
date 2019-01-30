const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("Title was clicked!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adoptable"
      ),
      React.createElement(Pet, {
        name: "Bismarck",
        animal: "Dog",
        breed: "Shiba Inu"
      }),
      React.createElement(Pet, {
        name: "Laika",
        animal: "Dog",
        breed: "Chihuahua"
      }),
      React.createElement(Pet, {
        name: "Lucius",
        animal: "Cat",
        breed: "Black"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
