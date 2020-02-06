import React from "react";
import logo from "./logo.svg";
import "./App.css";
import stylesheet from "./Component/Card/Card.module.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Btn from "./Component/Button";

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
        {
          <Card value={card}>
            <table>
              <td>
                <img
                  className="image"
                  src={card.photo}
                  alt="John"
                  style={{ width: 250, height: 200 }}
                />
              </td>
            </table>
            <table>
              <td>
                <p style={{ fontWeight: "bold" }}>{card.title}</p>
                <p>{card.location.title}</p>
                <p>{card.location.value}</p>
                <p>{card.members.title}</p>
                <p>{card.members.value}</p>
                <p>{card.organizers.title}</p>
                <p>{card.organizers.value}</p>
                {<Btn value="Join Us" />}
              </td>
            </table>
          </Card>
        }
        <h3 style={{ margin: 10 }}>Next Meetup</h3>
        {
          <Card value={card}>
            <p className={stylesheet.paragraph}>Awesome meetup and event</p>
            <p style={{ color: "grey" }}>25 January 2019</p>
            <p className={stylesheet.paragraph}>
              Hello, JavaScript & Node.Js Ninjas! <br />
              Get ready for our monthly meetup JakartaJS! This will be our fifth
              meetup of 2018! <br />
              The meetup format will contain some short stories and technical
              talks. <br />
              If you have a short announcement you'd like to share with the
              audience, you may do so during open mic accouncements.
            </p>
            <p className={stylesheet.paragraph}>
              Remember to bring a photo ID to get through building security.
            </p>
            <p className={stylesheet.paragraph}> - - - - </p>
            <p className={stylesheet.paragraph}>See you there!</p>
            <p className={stylesheet.paragraph}>
              Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
              Organizers
            </p>
          </Card>
        }
        <h3 style={{ margin: 10 }}>About Meetup</h3>
        <div style={{ margin: 20 }}>
          <p>
            Come and meet other developers in the JavaScript and it's library in
            the Greater Jakarta area. <br /> <br />
            Twitter: @JakartaJS and we use the hashtag #jakartajs
          </p>
          <h3>Members</h3>
        </div>
        {
          <Card value={card}>
            <img src={card.photo} className={stylesheet.round} />
            <p style={{ fontWeight: "bold", fontSize: 12 }}>Organizers</p>
            <p style={{ fontWeight: "bold", fontSize: 12 }}>
              Adhy Wiranata 4 others.
            </p>
          </Card>
        }
        <h3>Past Meetups</h3>
        {cardpast.map(({ date, content, view }) => (
          <Card style={{ width: 200, height: 200 }}>
            <p>{date}</p>
            <hr />
            <p>{content}</p>
            <p>{view} went</p>
            <Btn value={"View"} />
          </Card>
        ))}
      </>
    );
  };
}

export default App;
