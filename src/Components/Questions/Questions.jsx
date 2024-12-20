import React, { useState } from "react";
import "./question.css";
import Accordion from "./Accordion";
import { questionList } from "./questionList";

const Questions = () => {
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
        <div className="secContainer grid">
          <div className="accordion grid">
            {questionList.map(({ id, title, desc }) => {
              return <Accordion key={id} title={title} desc={desc} />;
            })}
          </div>

          <div className="form">
            <div className="secHeading">
              <h4>Do you have any specific question?</h4>
              <p>
                Please fill the form below and our dedicated team will get
                intouch with you as soon as possible.
              </p>
            </div>

            <div className="formContent grid">
              <input type="email" placeholder="Enter email address" />
              <textarea placeholder="Enter your question here"></textarea>
              <button className="btn">Submit inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
