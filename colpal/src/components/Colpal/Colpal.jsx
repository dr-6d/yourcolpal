import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import "./colpal.css";
import { masterList } from "./data";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const Colpal = () => {
  const [value1, setValue1] = React.useState(3);

  const [bool1, setBool1] = React.useState(true);
  const [bool2, setBool2] = React.useState(true);
  const [bool3, setBool3] = React.useState(true);
  const [bool4, setBool4] = React.useState(true);
  const [bool5, setBool5] = React.useState(true);

  return (
    <>
      <Form>
        <Form.Group as={Row}>
          <Col m="6">
            <RangeSlider
              value={value1}
              onChange={(e) => {
                setValue1(e.target.value);
                console.log(e.target.value);
                if (e.target.value == 2) {
                  setBool1(true);
                  setBool2(false);
                  setBool3(false);
                  setBool4(false);
                  setBool5(true);
                } else if (e.target.value == 4) {
                  setBool1(true);
                  setBool2(true);
                  setBool3(true);
                  setBool4(false);
                  setBool5(true);
                } else if (e.target.value == 5) {
                  setBool1(true);
                  setBool2(true);
                  setBool3(true);
                  setBool4(true);
                  setBool5(true);
                } else if (e.target.value == 3) {
                  setBool1(true);
                  setBool2(false);
                  setBool3(true);
                  setBool4(false);
                  setBool5(true);
                } else {
                  setBool1(true);
                  setBool2(false);
                  setBool3(false);
                  setBool4(false);
                  setBool5(false);
                }
              }}
              min={1}
              max={5}
            />
          </Col>
        </Form.Group>
      </Form>
      <div className="cont">
        {bool1 && <Split id={2} />}
        {bool2 && <Split id={2} />}
        {bool3 && <Split id={3} />}
        {bool4 && <Split id={3} />}
        {bool5 && <Split id={4} />}
      </div>
    </>
  );
};

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
