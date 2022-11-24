import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RoomView = ({ room, handleBooking }) => {
  const { id, img, name, price } = room;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text className="fw-bold">Hotel Type: {name}</Card.Text>
          <Card.Text>Price:$ {price}</Card.Text>
          <Button
            onClick={() => handleBooking(room)}
            variant="primary"
            className="fw-bold"
          >
            BOOKING NOW
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoomView;
