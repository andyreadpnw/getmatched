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

  handlePathSelection = (selection) => {
    let questionNumber = this.state.questionNumber;
    console.log(questionNumber)
    switch (selection) {
      case "answer1":
        this.setState({ 
          rn: this.state.rn + this.state.scoringData.question1.answer1.rn,
          bsn: this.state.bsn + this.state.scoringData.question1.answer1.bsn,
          msn: this.state.msn + this.state.scoringData.question1.answer1.msn,
          np: this.state.np + this.state.scoringData.question1.answer1.np,
          dnp: this.state.dnp + this.state.scoringData.question1.answer1.dnp,
          medass: this.state.medass + this.state.scoringData.question1.answer1.medass,
          medadmin: this.state.medadmin + this.state.scoringData.question1.answer1.medadmin,
          healthinfo: this.state.healthinfo + this.state.scoringData.question1.answer1.healthinfo,
          healthsci: this.state.healthsci + this.state.scoringData.question1.answer1.healthsci
         });
         let questionNumber = this.state.questionNumber + 1;
         this.setState({
           questionNumber: questionNumber
         })
         console.log(this.state.bsn)
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
    let questionNumber = this.state.questionNumber
    let computedProperty = "question"+questionNumber
    console.log(this.props['data'][computedProperty]['answer1']['questiontext'])
    let questionText1 = this.props['data'][computedProperty]['answer1']['questiontext'];
    let answerText1 = this.props['data'][computedProperty]['answer1']['answertext'];
    let answerText2 = this.props['data'][computedProperty]['answer2']['answertext'];
    let answerText3 = this.props['data'][computedProperty]['answer3']['answertext'];
    let answerText4 = this.props['data'][computedProperty]['answer4']['answertext'];

    return (
      <section id="about">
        <div className="row">
          <h1>{questionText1}</h1>
          <button onClick={() => this.handlePathSelection("answer1")}>
            {answerText1}
          </button>
          <button onClick={() => this.handlePathSelection("answer2")}>
            {answerText2}
          </button>
          <button onClick={() => this.handlePathSelection("answer3")}>
            {answerText3}
          </button>
          <button onClick={() => this.handlePathSelection("answer4")}>
            {answerText4}
          </button>
        </div>
      </section>
    );
  }
}

export default Question;
