import React from "react";
import { useLocation } from "react-router-dom";
import { flightDuration } from "../util/functions";
import BookingForm from "../components/BookingForm";


const Booking = () => {
  const location = useLocation();
  console.log(location.state);
  if(!location.state.secondFlight){
    const { arriveAt, avaliableSeats, depatureAt, prices, flightInfo } = location.state;
    //console.log("booking", location.state)
    return (
      <div>
        <div className="bookingInfo">
          <h1>Booking</h1>
          <p>from {flightInfo[0]} to {flightInfo[1]}</p>
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
        <div>
          <BookingForm flight={location.state}/>
        </div>
      </div>
    );
  } else {
    // console.log(location.state.firstFlight);
    // console.log(location.state.secondFlight);
    const { flightInfo:fiFlightInfo } = location.state.firstFlight;
    const { arriveAt:fiArriveAt, avaliableSeats:fiAvaliableSeats, depatureAt:fiDepatureAt, prices:fiPrices } = location.state.firstFlight.flight;
    const { arriveAt:seArriveAt, avaliableSeats:seAvaliableSeats, depatureAt:seDepatureAt, prices:sePrices } = location.state.secondFlight.flight;
    const { flightInfo:seFlightInfo } = location.state.secondFlight;
    
    //console.log("booking", location.state)
    return (
      <div>
        {/* First Flight */}
        <div className="bookingInfo">
          <h3>First Flight</h3>
          <p>from {fiFlightInfo[0]} to {fiFlightInfo[1]}</p>
          <p>Depature at: {fiDepatureAt}</p>
          <p>Arrive at: {fiArriveAt}</p>
          <p>
            Duration of flight:
            {flightDuration(fiDepatureAt, fiArriveAt)} hour/s
          </p>
          <p>Avaliable seats: {fiAvaliableSeats}</p>
          <div>
            Prices:
            {
              <div>
                <span>Adult: {fiPrices[0].adult}</span>
                <span>Child: {fiPrices[0].child}</span>
                <span>Currency: {fiPrices[0].currency}</span>
              </div>
            }
          </div>
        </div>
        {/* Second Flight */}
        <div className="bookingInfo">
          <h3>Second Flight</h3>
          <p>from {seFlightInfo[0]} to {seFlightInfo[1]}</p>
          <p>Depature at: {seDepatureAt}</p>
          <p>Arrive at: {seArriveAt}</p>
          <p>
            Duration of flight:
            {flightDuration(seDepatureAt, seArriveAt)} hour/s
          </p>
          <p>Avaliable seats: {seAvaliableSeats}</p>
          <div>
            Prices:
            {
              <div>
                <span>Adult: {sePrices[0].adult}</span>
                <span>Child: {sePrices[0].child}</span>
                <span>Currency: {sePrices[0].currency}</span>
              </div>
            }
          </div>
        </div>
        <div>
          {/* <BookingForm flight={location.state}/> */}
        </div>
      </div>
    );

  }
};

export default Booking;
