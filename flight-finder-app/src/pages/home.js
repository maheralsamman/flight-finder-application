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
            flight.depatureDestination.toLowerCase() === searchTerms.arrival.toLowerCase() &&
            flight.arrivalDestination.toLowerCase() === searchTerms.departure.toLowerCase())

      if(results.length > 0){
       // console.log(results);
        const flights = results.map(flights => 
          flights.itineraries.filter(itinerarie => 
            itinerarie.depatureAt >= searchTerms.depatureAt &&
            itinerarie.arriveAt <= searchTerms.arriveAt &&
            itinerarie.avaliableSeats >= searchTerms.passengers 
            )
          )
          const destinations = results.map(result => [result.depatureDestination, result.arrivalDestination] )
/*           console.log("destinations",destinations)
          console.log(flights) */
          setSearchedFlights([destinations, flights])
          // searchedFlights is an array that has two arrays the first is the destinations array 
          // and the second array is itineraries which are the flights. 
          // The length depends on if it is one way or rpund trip
          console.log(searchedFlights)
      }
      //console.log(results);
    }

    //console.log(date, "2022-12-12T12:30:00")
    //console.log(date > "2022-12-12T12:30:00" ? "True": "false")
 
  return (
    <div>
      <Search search={search}/>
      <h1>home</h1>
    </div>
  );
};

export default Home;
