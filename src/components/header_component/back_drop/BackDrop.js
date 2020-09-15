import React, { Component } from "react";
import "../../../assets/css/BackDrop.css";

const BackDrop = (props) => <div className="backdrop" onClick={props.click} />;

export default BackDrop;
