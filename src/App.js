import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import CardMeetup from "./Component/CardMeetup";
import CardMember from "./Component/CardMember";
import CardPastMeetup from "./Component/CardPastMeetup";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navbar: [
        {
          id: 1,
          name: "QTemu"
        },
        {
          id: 2,
          name: "Create Meetup"
        },
        {
          id: 3,
          name: "Explore"
        },
        {
          id: 4,
          name: "Login"
        }
      ],
      card: {
        photo:
          "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-beauty-458766.jpg&fm=jpg",
        title: "Hacktiv8 Meetup",
        location: {
          title: "Location",
          value: "Jakarta, Indonesia"
        },
        members: {
          title: "Members",
          value: "1,078"
        },
        organizers: {
          title: "Organizers",
          value: "Adhy Wiranata"
        }
      },
      cardpast: [
        {
          id: 1,
          date: "27 November 2017",
          content: "#39 JakartaJS April Meetup with kumparan",
          view: "139"
        },
        {
          id: 2,
          date: "27 October 2017",
          content: "#38 JakartaJS April Meetup with BliBli",
          view: "113"
        },
        {
          id: 3,
          date: "27 September 2017",
          content: "#37 JakartaJS April Meetup with Hackti8",
          view: "110"
        }
      ]
    };
  }

  render = () => {
    const { navbar, card, cardpast } = this.state;
    return (
      <>
        {<Navbar value={navbar} />}
        {<Card value={card} />}
        <h3 style={{ margin: 10 }}>Next Meetup</h3>
        {<CardMeetup value={card} />}
        <h3 style={{ margin: 10 }}>About Meetup</h3>
        <div style={{ margin: 20 }}>
          <p>
            Come and meet other developers in the JavaScript and it's library in
            the Greater Jakarta area. <br /> <br />
            Twitter: @JakartaJS and we use the hashtag #jakartajs
          </p>
        </div>
        {<CardMember value={card} />}
        {<CardPastMeetup value={cardpast} />}
      </>
    );
  };
}

export default App;
