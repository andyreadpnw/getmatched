import React, { Component } from "react";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoringData: {},
      rn: 0,
      bsn: 0,
      msn: 0,
      np: 0,
      dnp: 0,
      medass: 0,
      medadmin: 0,
      healthinfo: 0,
      healthsci: 0,
      questionNumber: 1,
    };
  }

  componentDidMount() {
    let scoringArray = this.props.data;
    this.setState({
      scoringData: scoringArray,
    });
  }

  handlePathSelection1 = () => {
    let questionNumber = this.state.questionNumber;
    switch (questionNumber) {
      case "answer1":
        this.setState({ 
          rn: this.state.scoringData.question1.answer1.rn,
          bsn: this.state.scoringData.question1.answer1.bsn,
          msn: this.state.scoringData.question1.answer1.msn,
          np: this.state.scoringData.question1.answer1.np,
          dnp: this.state.scoringData.question1.answer1.dnp,
          medass: this.state.scoringData.question1.answer1.medass,
          medadmin: this.state.scoringData.question1.answer1.medadmin,
          healthinfo: this.state.scoringData.question1.answer1.healthinfo,
          healthsci: this.state.scoringData.question1.answer1.healthsci
         });
        break;
      case "answer2":
        console.log("byge");
        break;
      case "answer3":
        console.log("bye");
        break;
      case "answer4":
        console.log("bye");
        break;
      case "answer5":
        console.log("bye");
        break;
    }
  };

  render() {
    let questionText1 = this.props.data.question1.answer1.questiontext;
    let answerText1 = this.props.data.question1.answer1.answertext;
    console.log(questionText1);
    let rn = this.props.data.question1.answer1.rn;
    console.log(this.props.data);
    console.log(this.state.scoringData);
    return (
      <section id="about">
        <div className="row">
          <h1>{questionText1}</h1>
          <button onClick={() => this.handlePathSelection1()}>
            {answerText1}
          </button>
          <span>{rn}</span>
        </div>
      </section>
    );
  }
}

export default Question;
