import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import { Nav, Container } from "react-bootstrap";
import "./colpal.css";

function Colpal() {
  return (
    <>
      <div className="cont">
        <div className="split-l">
          <div className="cont">
            <button id="button">Change</button>
          </div>
        </div>
        <div className="split-m">
          <div className="cont">
            <button id="button">Change</button>
          </div>
        </div>
        <div className="split-r">
          <div className="cont">
            <button id="button">Change</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Colpal;
