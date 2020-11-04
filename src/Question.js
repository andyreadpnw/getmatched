import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoringData: {},
      isLoaded: false,
    };
  }

  handlePathSelection = () => {
    console.log("hi");
  };

  render() {
    let questionText = this.props.data.question1.thinking.text;
    console.log(questionText);
    let rn = this.props.data.question1.thinking.rn;
    console.log(this.props.data);
    return (
      <section id="about">
        <div className="row">
          <button onClick={() => this.handlePathSelection()}>
            {questionText}
          </button>
          <span>{rn}</span>
        </div>
      </section>
    );
  }
}

export default Question;
