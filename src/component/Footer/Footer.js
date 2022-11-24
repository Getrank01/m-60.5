import React from "react";
import Card from "react-bootstrap/Card";
import d1 from "../../img/d1.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="">
      {" "}
      <Card>
        <Card.Img className="foot" variant="top" src={`${d1}`} />
        <Card.Body>
          <Card.Text>COPYRIGHT BY HOTEL ROOM</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
