import React, { Component } from "react";
import stylesheet from "./CardPastMeetup.module.css";
import Btn from "./../Button/index";

class CardPastMeetup extends Component {
  render() {
    return (
      <>
        <h3 style={{ margin: 10 }}>Past Meetups</h3>
        <div>
          {this.props.value.map(({ date, content, view }) => (
            <div
              style={{
                background: "#C4C4C4",
                padding: 12,
                margin: 6,
                display: "block",
                position: "relative",
                width: 200,
                height: 200
              }}
              className={stylesheet.forminline}
            >
              <p>{date}</p>
              <hr />
              <p>{content}</p>
              <p>{view} went</p>
              {<Btn value={"View"} />}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CardPastMeetup;
