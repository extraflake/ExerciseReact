import React, { Component } from "react";
import stylesheet from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={stylesheet.container}>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul>
            {this.props.value.map(({ name }) => (
              <li style={{ float: "left" }}>
                <a href="#home">
                  <label>{name}</label>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
