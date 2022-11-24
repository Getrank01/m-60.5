import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import RoomView from "../ROOMVIEW/RoomView";

import "./Room.css";

const Room = () => {
  const [rooms, setroom] = useState([]);
  const [booking, setbooking] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/room-types")
      .then((res) => res.json())
      .then((data) => setroom(data));
  }, []);

  const handleBooking = (room) => {
    const newbooking = [...booking, room];
    setbooking(newbooking);
    console.log(newbooking);
  };

  return (
    <div className="displayall">
      <div className=" allroom mt-4 mb-4">
        {rooms.map((room) => (
          <RoomView
            room={room}
            key={room.id}
            handleBooking={handleBooking}
          ></RoomView>
        ))}
      </div>
      <Booking booking={booking}></Booking>
    </div>
  );
};

export default Room;
