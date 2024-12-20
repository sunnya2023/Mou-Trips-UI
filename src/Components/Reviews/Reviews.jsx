import React from "react";
import "./reviews.css";
import { AiFillStar } from "react-icons/ai";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";
import client4 from "../../assets/client4.jpg";
import client5 from "../../assets/client5.jpg";
import img from "../../assets/tourist1.jpg";
const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>

          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={client1} alt="client Image" />
            <img src={client2} alt="client Image" />
            <img src={client3} alt="client Image" />
            <img src={client4} alt="client Image" />
            <img src={client5} alt="client Image" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={img} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
