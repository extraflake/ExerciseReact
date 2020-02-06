import React, { Component } from "react";
import stylesheet from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button style={{ backgroundColor: "grey", color: "white", border: 0 }}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
