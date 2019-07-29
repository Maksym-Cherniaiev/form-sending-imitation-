import React from "react";

import "./skeleton.sass";
import "./index.sass";

class From extends React.Component {
  render() {
    return(
      <section className="main-container">
        <header className="header">
          <h2>Send New Email</h2>
        </header>
        <form className="form">
          <label>To:</label>
          <input></input>
          <label>Subject:</label>
          <input></input>
          <textarea className="form_user-text" placeholder="Message"></textarea>
          <div></div>
          <div className="buttons">
            <button>send</button>
            <button>reset</button>
          </div>
        </form>
      </section>
    );
  }
}

export default From;