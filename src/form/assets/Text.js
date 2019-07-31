import React from "react";

import validateForm from "../resources/form-validation";

class Text extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="user-text">Message:</label>
        <textarea id="user-text" onBlur={ validateForm } className="form_user-text"></textarea>
      </>
    );
  }
}

export default Text;