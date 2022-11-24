import React from "react";
import Booking from "../Booking/Booking";
import Room from "../Room/Room";

const Home = () => {
  return (
    <div className="">
      <h1 className="bg-dark text-white text-center mt-2 p-2">
        JOURNEY FOR ALLAH
      </h1>

      <div>
        <Room></Room>
      </div>
    </div>
  );
};

export default Home;
