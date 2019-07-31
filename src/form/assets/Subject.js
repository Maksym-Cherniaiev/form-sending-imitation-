import React from "react";

import validateForm from "../resources/form-validation";

class Subject extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="subject">Subject:</label>
        <input id="subject" onBlur={ validateForm } type="text"></input>
      </>
    );
  }
}

export default Subject;