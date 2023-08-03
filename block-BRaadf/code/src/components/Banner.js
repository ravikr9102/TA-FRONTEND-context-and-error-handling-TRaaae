import React from "react";
import { Context } from "../Context";

class Banner extends React.Component {
  static contextType = Context
  render() {
    let { isDarkMode } = this.context;
    return (
      <div
        className={
          isDarkMode
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    );
  }
}

export default Banner;
