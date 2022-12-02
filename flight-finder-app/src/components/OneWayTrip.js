import React from 'react'

const OneWayTrip = ({ searchedFlights, flightDuration}) => {
  return (
    <div>
    {/*console.log(searchedFlights[1][0][0])*/}
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
          Prices:{" "}
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
  </div>
  )
}

export default OneWayTrip