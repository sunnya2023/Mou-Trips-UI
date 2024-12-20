import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

import "./question.css";

const Accordion = ({ title, desc }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="accordionContainer">
      <span
        className={isShowing ? "activeTitle title flex" : "title flex"}
        onClick={() => setIsShowing(!isShowing)}
      >
        {title}
        <span>
          {isShowing ? (
            <BsArrowUpCircle className="icon" />
          ) : (
            <BsArrowDownCircle className="icon" />
          )}
        </span>
      </span>

      {isShowing && <p className="description">{desc}</p>}
    </div>
  );
};

export default Accordion;
