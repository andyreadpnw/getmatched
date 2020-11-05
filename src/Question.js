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
      numberQuestions: 4
    };
  }

  componentDidMount() {
    let scoringArray = this.props.data;
    this.setState({
      scoringData: scoringArray,
    });
  }

  handlePathSelection = (questionNumber, selection) => {
    console.log(this.state.bsn)
    let selectionValues = Object.values(this.state.scoringData[questionNumber][selection])
    let rnValue = selectionValues[0];
    let bsnValue = selectionValues[1];
    let msnValue = selectionValues[2];
    let npValue = selectionValues[3];
    let dnpValue = selectionValues[4];
    let medassValue = selectionValues[5];
    let medadminValue = selectionValues[6];
    let healthinfoValue = selectionValues[7];
    let healthsciValue = selectionValues[8];

        this.setState({ 
          rn: this.state.rn + rnValue,
          bsn: this.state.bsn + bsnValue,
          msn: this.state.msn + msnValue,
          np: this.state.np + npValue,
          dnp: this.state.dnp + dnpValue,
          medass: this.state.medass + medassValue,
          medadmin: this.state.medadmin + medadminValue,
          healthinfo: this.state.healthinfo + healthinfoValue,
          healthsci: this.state.healthsci + healthsciValue
         });
          questionNumber = this.state.questionNumber + 1;
         this.setState({
           questionNumber: questionNumber
         })
  };

  render() {
    let questionNumber = this.state.questionNumber
    let computedProperty = "question"+questionNumber
    let numberAnswers = this.props['data'][computedProperty]['answer1']['questionamount']
    console.log(this.props['data'][computedProperty]['answer1']['questiontext'])
    console.log(numberAnswers)
    let questionText1 = this.props['data'][computedProperty]['answer1']['questiontext'];

    let answerText1 = this.props['data'][computedProperty]['answer1']['answertext'];
    let answerText2 = this.props['data'][computedProperty]['answer2']['answertext']; 
    let answerText3 = this.props['data'][computedProperty]['answer3']['answertext'];
    let answerText4 = this.props['data'][computedProperty]['answer4']['answertext'];

    return (
      <section id="about">
        <div className="row">
          <h1>{questionText1}</h1>
          <button onClick={() => this.handlePathSelection(computedProperty, "answer1")}>
            {answerText1}
          </button>
          <button onClick={() => this.handlePathSelection(computedProperty,"answer2")}>
            {answerText2}
          </button>
          <button onClick={() => this.handlePathSelection(computedProperty,"answer3")}>
            {answerText3}
          </button>
          <button onClick={() => this.handlePathSelection(computedProperty,"answer4")}>
            {answerText4}
          </button>
        </div>
      </section>
    );
  }
}

export default Question;
