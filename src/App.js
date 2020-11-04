import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Question from "./Question";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scoringData: {},
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://raw.githubusercontent.com/andyreadpnw/getmatched/main/public/scoringData.json"
    );
    const json = await response.json();
    this.setState({
      scoringData: json,
      isLoaded: true,
    });
    console.log(this.state.scoringData);
    console.log(this.state.isLoaded);
  }

  render() {
    const dataLoaded = this.state.isLoaded;
    console.log(dataLoaded);
    return (
      <div className="Question">
        {dataLoaded && <Question data={this.state.scoringData.main} />}
      </div>
    );
  }
}

export default App;
