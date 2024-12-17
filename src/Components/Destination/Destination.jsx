import React from "react";
import "./destination.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

const destinations = [
  {
    id: 1,
    img: img1,
    name: "Cinque Terre",
    location: "La Spezia, Italia",
    rating: 4.7,
  },
  {
    id: 2,
    img: img2,
    name: "Beijing",
    location: "China",
    rating: 4.6,
  },
  {
    id: 3,
    img: img3,
    name: "Maldives Island",
    location: "Indian Ocean",
    rating: 4.9,
  },
  {
    id: 4,
    img: img4,
    name: "Maui Island",
    location: "Hawaii, USA",
    rating: 4.6,
  },
  {
    id: 5,
    img: img5,
    name: "Tokyo",
    location: "Japan",
    rating: 4.6,
  },
  {
    id: 6,
    img: img6,
    name: "Rio de Janeiro",
    location: "Brasil",
    rating: 4.6,
  },
  {
    id: 7,
    img: img7,
    name: "Seychelles Island",
    location: "Indian Ocean",
    rating: 4.3,
  },
  {
    id: 8,
    img: img8,
    name: "Moscow",
    location: "Russia",
    rating: 4.2,
  },
];

const Destination = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTile">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Locaiton" />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex">
            <BsCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((place) => {
            return (
              <div className="singleDestination" key={place.id}>
                <div className="imgDv">
                  <img src={place.img} alt="Destination Image" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{place.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {place.location}
                      </p>
                    </div>
                    <span className="rating">{place.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
