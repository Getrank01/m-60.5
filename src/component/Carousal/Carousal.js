import React from "react";
import Carousel from "react-bootstrap/Carousel";
import d1 from "../../img/d1.jpg";
import d2 from "../../img/d2.jpg";
import d3 from "../../img/d3.jpg";
import d4 from "../../img/d4.jpg";
import "./Carousel.css";

const Carousal = () => {
  return (
    <div className="mt-2 caro ">
      <Carousel>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={`${d1}`} alt="First slide" />
          <Carousel.Caption>
            <h3 className="bg-dark">SUBAHAN ALLAH</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={`${d4}`} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="bg-dark">ALHAMDULILLAH</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={`${d2}`} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="bg-dark">ALLAH HU AKHBAR</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={`${d3}`} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="bg-dark">LAAA ELAHA ELALLAHU</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
