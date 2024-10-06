import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SliderBanner.css';
const SliderBanner = () => {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider--2_3ca1d7af-a201-4c0c-840c-337a9aa591df.jpg?v=1559368798"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="slideContent">
            <h2>A Great Addition</h2>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <Link to="/shop">
                <button button className="custombtn">Shopping Now</button>
              </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider-3_57764d19-02cc-428d-9d38-e9c6295cc5b4.jpg?v=1559368786"
          alt="Second slide"
        />

        <Carousel.Caption>
         <div className="slideContent">
            <h2>Black Great Addition</h2>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Link to="/shop">
              <button className="custombtn">Shopping Now</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider-2_f7becb67-5722-4f24-810d-d8ad5fa7483e.jpg?v=1559368812"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="slideContent">
            <h2>Great Leather Collection.</h2>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Link to="/shop">
              <button className="custombtn">Shopping Now</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};



export default SliderBanner;