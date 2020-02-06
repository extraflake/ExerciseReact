import React, { Component } from "react";
import stylesheet from "./Card.module.css";
import Btn from "./../Button/index";

class Card extends Component {
  render() {
    return (
      <>
        <div
          style={{
            background: "#C4C4C4",
            padding: 12,
            margin: 6,
            display: "block",
            position: "relative"
          }}
          className={stylesheet.forminline}
        >
          <table>
            <td>
              <img
                className="image"
                src={this.props.value.photo}
                alt="John"
                style={{ width: 250, height: 200 }}
              />
            </td>
          </table>
          <table>
            <td>
              <p style={{ fontWeight: "bold" }}>{this.props.value.title}</p>
              <p>{this.props.value.location.title}</p>
              <p>{this.props.value.location.value}</p>
              <p>{this.props.value.members.title}</p>
              <p>{this.props.value.members.value}</p>
              <p>{this.props.value.organizers.title}</p>
              <p>{this.props.value.organizers.value}</p>
              {<Btn value="Join Us" />}
            </td>
          </table>
        </div>
      </>
    );
  }
}

export default Card;
