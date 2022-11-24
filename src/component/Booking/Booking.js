import React from "react";

const Booking = ({ booking }) => {
  return (
    <div className="mt-2 bg-dark text-white rounded">
      <div>
        <h1 className="text-center">BOOKING DETAILS</h1>
        <hr />
      </div>
      <div>
        <h4 className="fs-2 fw-bold">Night Stand :{booking.length}</h4>
        <h4 className="fs-2 fw-bold">Price :</h4>
      </div>
    </div>
  );
};

export default Booking;
