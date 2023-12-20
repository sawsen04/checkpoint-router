import React from "react";
import "./styleSectionTwo.css";
import { Link } from "react-router-dom";

function CardsSectionTwo({ img, ratingnum, title, duration, movietype, id }) {
  return (
    <div className="cart">
      <div className="image">
        <img src={img} alt="" width={250} />
      </div>
      <div className="rating">
        <p>{"⭐".repeat(ratingnum)}</p>
      </div>
      <h1>{title}</h1>
      <div className="description">
        <h2>{duration}</h2>
        <h3>{movietype}</h3>
      </div>
      <p>
        <Link to={`/Movie/${id}`}>See more</Link>
      </p>
    </div>
  );
}

export default CardsSectionTwo;
