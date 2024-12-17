import React from "react";
import "./home.css";
import Video from "../../assets/video.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";
const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted />
      </div>

      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button className="btn flex">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
