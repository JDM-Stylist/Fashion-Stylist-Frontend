import React, { useState } from 'react';
import data from './Data.json';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Home.css";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
    <div className="carousel-container">
      <h1>Our Products</h1>
    </div>
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <img
          src={item.img1}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((item, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          />
        ))}
      </span>
    </div>
    </>
  );
};

export default Carousel;
