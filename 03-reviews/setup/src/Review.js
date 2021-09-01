import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    if (index != 0) {
      setIndex(index - 1);
    } else {
      setIndex(people.length - 1);
    }
  };
  const nextPerson = () => {
    if (index != people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const randomPerson = () => {
    const randomNumber = Math.floor((Math.random() * 10) % (people.length - 1));
    if (index != randomNumber) {
      setIndex(randomNumber);
    } else {
      nextPerson();
    }
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
