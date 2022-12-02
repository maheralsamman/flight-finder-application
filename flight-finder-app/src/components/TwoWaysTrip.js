import React from "react";

const TwoWaysTrip = ({ searchedFlights, flightDuration }) => {
  return (
    <div>
      <p>
        <span>Outbound: </span>
        {searchedFlights[0][0][0] + " → " + searchedFlights[0][0][1]}
      </p>
      {searchedFlights[1][0].map((flight, i) => (
        <div style={{ border: "2px solid black" }} key={i}>
          <p>depatureAt: {flight.depatureAt}</p>
          <p>arriveAt: {flight.arriveAt}</p>
          <p>
            duration of flight:{" "}
            {flightDuration(flight.depatureAt, flight.arriveAt)} hour/s
          </p>
          <p>avaliableSeats: {flight.avaliableSeats}</p>
          <div>
            Prices:
            {
              <div>
                <span>Adult: {flight.prices[0].adult}</span>
                <span>Child: {flight.prices[0].child}</span>
                <span>Currency: {flight.prices[0].currency}</span>
              </div>
            }
          </div>
        </div>
      ))}
      <p>
        <span>Return: </span>
        {searchedFlights[0][1][0] + " → " + searchedFlights[0][1][1]}
      </p>
      {searchedFlights[1][1].map((returFlight, i) => (
        <div style={{ border: "2px solid black" }} key={i}>
          <p>depatureAt: {returFlight.depatureAt}</p>
          <p>arriveAt: {returFlight.arriveAt}</p>
          <p>
            duration of flight:
            {flightDuration(returFlight.depatureAt, returFlight.arriveAt)}
            hour/s
          </p>
          <p>avaliableSeats: {returFlight.avaliableSeats}</p>
          <div>
            Prices:
            {
              <div>
                <span>Adult: {returFlight.prices[0].adult}</span>
                <span>Child: {returFlight.prices[0].child}</span>
                <span>Currency: {returFlight.prices[0].currency}</span>
              </div>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoWaysTrip;
