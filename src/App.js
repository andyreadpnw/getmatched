import React, { Component } from "react";
import "./App.css";
import Question from "./Question";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://raw.githubusercontent.com/andyreadpnw/getmatched/main/public/scoringData.json"
    );
    const json = await response.json();
    console.log(json)
    this.setState({
      data: json,
      isLoaded: true,
    });
    console.log(this.state.data);
    console.log(this.state.isLoaded);
  }

  render() {
    const dataLoaded = this.state.isLoaded;
    console.log(dataLoaded);
    return (
      <div className="Question">
        {dataLoaded && <Question data={this.state.data.main} />}
      </div>
    );
  }
}

export default App;
