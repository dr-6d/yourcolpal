import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import "./colpal.css";
import { masterList } from "./data";

class Colpal extends Component {
  constructor() {
    super();
    this.state = { index1: 0 };
  }
  render() {
    return (
      <>
        <div className="cont">
          <Split id={2} />
          <Split id={2} />
          <Split id={3} />
          <Split id={3} />
          <Split id={4} />
          <Split id={4} />
        </div>
      </>
    );
  }
}

class Split extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: Math.floor(Math.random() * masterList.length),
    };
    this.id = props.id;
  }

  render() {
    return (
      <>
        <div
          style={{ backgroundColor: masterList[this.state.index][this.id] }}
          className="split"
        >
          <div
            style={{ backgroundColor: masterList[this.state.index][this.id] }}
            className="cont"
          >
            <button
              onClick={() => {
                this.setState({
                  index: Math.floor(Math.random() * masterList.length),
                });
              }}
              className="button-54"
            >
              change
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Colpal;
