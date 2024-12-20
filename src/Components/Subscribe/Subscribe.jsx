import React from "react";
import "./subscribe.css";
import call from "../../assets/call.png";
const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={call} alt="imgage" />

        <div className="textDiv">
          <h4>Best Way To Start Your Journey!</h4>
          <p>
            We offer personalized itineraties tailored to individual preferences
            and interests.
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
