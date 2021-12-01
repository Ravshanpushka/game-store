import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const MyCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="img1"
            src="https://www.callofduty-infobase.de/wp-content/uploads/2018/03/Black-ops-4-2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="https://www.ingame.de/bilder/2021/04/27/90477896/14965896-frontalansicht-auf-ein-auto-an-der-spitze-eines-rennens-mit-einem-forza-horizon-5-schriftzug-33EhmTfODlef.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="https://umtalelab.com/wp-content/uploads/2021/09/battlefield-2042.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
