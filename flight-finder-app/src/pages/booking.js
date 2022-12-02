import React from "react";
import { useLocation } from "react-router-dom";
import { flightDuration } from "../util/functions";

const Booking = () => {
  const location = useLocation();
  //console.log(location.state.arriveAt);
  const { arriveAt, avaliableSeats, depatureAt, prices } = location.state;
  //console.log("booking", location.state)
  return (
    <div>
      <h1> Booking</h1>
      <p>Depature at: {depatureAt}</p>
      <p>Arrive at: {arriveAt}</p>
      <p>
        Duration of flight:
        {flightDuration(depatureAt, arriveAt)} hour/s
      </p>
      <p>Avaliable seats: {avaliableSeats}</p>
      <div>
        Prices:
        {
          <div>
            <span>Adult: {prices[0].adult}</span>
            <span>Child: {prices[0].child}</span>
            <span>Currency: {prices[0].currency}</span>
          </div>
        }
      </div>
    </div>
  );
};

export default Booking;
