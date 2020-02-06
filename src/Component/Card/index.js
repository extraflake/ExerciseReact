import React, { Component } from "react";
import stylesheet from "./Card.module.css";
import Btn from "./../Button/index";

const card = ({ children }) => (
  <div className={stylesheet.container}>{children}</div>
);

export default card;
