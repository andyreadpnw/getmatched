import React, { Component } from "react";

class Question extends Component {
  render() {
    if (this.props.data) {
      var rn = this.props.data.question1.thinking.rn;
    }
    return (
      <section id="about">
        <div className="row">
          <span>{rn}
          </span>
        </div>
      </section>
    );
  }
}

export default Question;
