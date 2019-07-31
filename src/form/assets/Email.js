import React from "react";

import validateForm from "../resources/form-validation";

class Email extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="email">To:</label>
        <input id="email" onBlur={ validateForm } type="email"></input>
      </>
    );
  }
}

export default Email;