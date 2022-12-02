import React, { useState,useEffect } from "react";
import Search from "../components/Search";

const Home = ({ flights }) => {
    const [searchedFlights, setSearchedFlights] = useState([]);
    const search = (searchTerms) => {
      const results = !searchTerms.withReturn ? flights.filter(flight => 
          flight.depatureDestination.toLowerCase() === searchTerms.departure.toLowerCase() &&
          flight.arrivalDestination.toLowerCase() === searchTerms.arrival.toLowerCase()) : 
          flights.filter(flight => 
           ( flight.depatureDestination.toLowerCase() === searchTerms.departure.toLowerCase() &&
            flight.arrivalDestination.toLowerCase() === searchTerms.arrival.toLowerCase()) ||
            (flight.depatureDestination.toLowerCase() === searchTerms.arrival.toLowerCase() &&
            flight.arrivalDestination.toLowerCase() === searchTerms.departure.toLowerCase()))

      if(results.length > 0){
       // console.log(results);
        const flights = results.map(flights => 
          flights.itineraries.filter(itinerarie => 
            itinerarie.depatureAt >= searchTerms.depatureAt &&
            itinerarie.arriveAt <= searchTerms.arriveAt &&
            itinerarie.avaliableSeats >= searchTerms.passengers + searchTerms.children
            )
          )
          const destinations = results.map(result => [result.depatureDestination, result.arrivalDestination] )
/*           console.log("destinations",destinations)
          console.log(flights) */
          setSearchedFlights([destinations, flights])
          // searchedFlights is an array that has two arrays the first is the destinations array 
          // and the second array is itineraries which are the flights. 
          // The length depends on if it is one way or rpund trip
          console.log([destinations, flights])
      }
      //console.log(results);
    }

    //console.log(date, "2022-12-12T12:30:00")
    //console.log(date > "2022-12-12T12:30:00" ? "True": "false")
 
  return (
    <div>
      <Search search={search}/>
      {searchedFlights.length && searchedFlights[0].length === 1 ? 
      <div>
        {/*console.log(searchedFlights[1][0][0])*/}
        <p><span>Outbound: </span>{searchedFlights[0][0][0] + " → " + searchedFlights[0][0][1]}</p>
        {searchedFlights[1][0].map((flight,i) =>
        <div style={{border:"2px solid black"}} key={i}>
          <p>depatureAt: {flight.depatureAt}</p>
          <p>arriveAt: {flight.arriveAt}</p>
          <p>avaliableSeats: {flight.avaliableSeats}</p>
          <div>Prices: {
          <div>
            <span>Adult: {flight.prices[0].adult}</span>
            <span>Child: {flight.prices[0].child}</span>
            <span>Currency: {flight.prices[0].currency}</span>
          </div>
          }
          </div>
        </div>
        )}
      </div>
        : searchedFlights.length && searchedFlights[1].length === 2 ? 
        <div>
       <p><span>Outbound: </span>{searchedFlights[0][0][0] + " → " + searchedFlights[0][0][1]}</p>
       {searchedFlights[1][0].map((flight,i) =>
        <div style={{border:"2px solid black"}} key={i}>
          <p>depatureAt: {flight.depatureAt}</p>
          <p>arriveAt: {flight.arriveAt}</p>
          <p>avaliableSeats: {flight.avaliableSeats}</p>
          <div>Prices: {
          <div>
            <span>Adult: {flight.prices[0].adult}</span>
            <span>Child: {flight.prices[0].child}</span>
            <span>Currency: {flight.prices[0].currency}</span>
          </div>
          }
          </div>
        </div>
        )}
       <p><span>Return: </span>{searchedFlights[0][1][0] + " → " + searchedFlights[0][1][1]}</p>
       {searchedFlights[1][1].map((returFlight,i) =>
        <div style={{border:"2px solid black"}} key={i}>
          <p>depatureAt: {returFlight.depatureAt}</p>
          <p>arriveAt: {returFlight.arriveAt}</p>
          <p>avaliableSeats: {returFlight.avaliableSeats}</p>
          <div>Prices: {
          <div>
            <span>Adult: {returFlight.prices[0].adult}</span>
            <span>Child: {returFlight.prices[0].child}</span>
            <span>Currency: {returFlight.prices[0].currency}</span>
          </div>
          }
          </div>
        </div>
        )}
       
     </div> : ""
     }
      <h1>Home</h1>
    </div>
  );
};

export default Home;
