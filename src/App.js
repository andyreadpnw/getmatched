import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Question from "./Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      scoringData: {},
      isLoaded: false,
    };
  }

  getScoringData() {
    fetch(
      "https://raw.githubusercontent.com/andyreadpnw/getmatched/main/public/scoringData.json"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            scoringData: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getScoringData();
  }

  render() {
    return (
      <div className="Question">
        <Question data={this.state.scoringData.question1} />
      </div>
    );
  }
}

export default App;
