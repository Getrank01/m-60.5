import React from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

const Booking = ({ booking }) => {
  let totalnight = 0;
  let price = 0;

  for (const room of booking) {
    totalnight = totalnight + room.pernight;
    price = price + room.price;
  }
  return (
    <div className="booking-cart mt-2 text-white rounded ">
      <h1 className="text-center">BOOKING DETAILS</h1>
      <hr />

      <h4 className="fs-2 fw-bold">Night Stand :{totalnight}</h4>
      <h4 className="fs-2 fw-bold">Price :{price}</h4>

      <button>
        {" "}
        <Link to="/shipping">Shipping Process</Link>{" "}
      </button>
    </div>
  );
};

export default Booking;
