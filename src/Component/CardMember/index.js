import React, { Component } from "react";
import stylesheet from "./../CardMember/CardMember.module.css";

class CardMember extends Component {
  render() {
    return (
      <>
        <h3 style={{ margin: 10 }}>Member</h3>
        <div
          style={{
            background: "#C4C4C4",
            padding: 12,
            margin: 22,
            display: "block",
            position: "relative"
          }}
        >
          <img src={this.props.value.photo} className={stylesheet.round} />
          <p style={{ fontWeight: "bold", fontSize: 12 }}>Organizers</p>
          <p style={{ fontWeight: "bold", fontSize: 12 }}>
            Adhy Wiranata 4 others.
          </p>
        </div>
      </>
    );
  }
}

export default CardMember;
