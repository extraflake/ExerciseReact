import React, { Component } from "react";
import stylesheet from "./CardMeetup.module.css";

export default class index extends Component {
  render() {
    return (
      <div
        style={{
          background: "#C4C4C4",
          padding: 12,
          margin: 25,
          display: "block",
          position: "relative"
        }}
        className={stylesheet.forminline}
      >
        <p className={stylesheet.paragraph}>Awesome meetup and event</p>
        <p style={{ color: "grey" }}>25 January 2019</p>
        <p className={stylesheet.paragraph}>
          Hello, JavaScript & Node.Js Ninjas! <br />
          Get ready for our monthly meetup JakartaJS! This will be our fifth
          meetup of 2018! <br />
          The meetup format will contain some short stories and technical talks.{" "}
          <br />
          If you have a short announcement you'd like to share with the
          audience, you may do so during open mic accouncements.
        </p>
        <p className={stylesheet.paragraph}>
          Remember to bring a photo ID to get through building security.
        </p>
        <p className={stylesheet.paragraph}> - - - - </p>
        <p className={stylesheet.paragraph}>See you there!</p>
        <p className={stylesheet.paragraph}>
          Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
        </p>
      </div>
    );
  }
}
