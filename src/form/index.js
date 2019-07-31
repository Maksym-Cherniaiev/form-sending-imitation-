import React from "react";

import "./skeleton.sass";
import "./index.sass";

import Email from "./assets/Email";
import Subject from "./assets/Subject";
import Text from "./assets/Text";

class From extends React.Component {
  render() {
    return(
      <section className="main-container">
        <header className="header">
          <h2>Send New Email</h2>
        </header>
        <form className="form">
          <Email></Email>
          <Subject></Subject>
          <Text></Text>
          <div></div>
          <div className="buttons">
            <button className="send-button" disabled={ true }>send</button>
            <button className="reset-button">reset</button>
          </div>
        </form>
      </section>
    );
  }
}

export default From;