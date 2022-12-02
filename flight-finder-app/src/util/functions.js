export const search = (searchTerms, flights, setSearchedFlights) => {
    const results = !searchTerms.withReturn
      ? flights.filter(
          (flight) =>
            flight.depatureDestination.toLowerCase() ===
              searchTerms.departure.toLowerCase() &&
            flight.arrivalDestination.toLowerCase() ===
              searchTerms.arrival.toLowerCase()
        )
      : flights.filter(
          (flight) =>
            (flight.depatureDestination.toLowerCase() ===
              searchTerms.departure.toLowerCase() &&
              flight.arrivalDestination.toLowerCase() ===
                searchTerms.arrival.toLowerCase()) ||
            (flight.depatureDestination.toLowerCase() ===
              searchTerms.arrival.toLowerCase() &&
              flight.arrivalDestination.toLowerCase() ===
                searchTerms.departure.toLowerCase())
        );

    if (results.length > 0) {
      // console.log(results);
      const flights = results.map((flights) =>
        flights.itineraries.filter(
          (itinerarie) =>
            itinerarie.depatureAt >= searchTerms.depatureAt &&
            itinerarie.arriveAt <= searchTerms.arriveAt &&
            itinerarie.avaliableSeats >=
              searchTerms.passengers + searchTerms.children
        )
      );
      const destinations = results.map((result) => [
        result.depatureDestination,
        result.arrivalDestination,
        result.flight_id
      ]);
      /*           console.log("destinations",destinations)
          console.log(flights) */
      setSearchedFlights([destinations, flights]);
      // searchedFlights is an array that has two arrays the first is the destinations array
      // and the second array is itineraries which are the flights.
      // The length depends on if it is one way or rpund trip
      console.log([destinations, flights]);
    }
    //console.log(results);
  };

  export const flightDuration = (dep, arr) => {
    let diff = Math.abs(new Date(dep) - new Date(arr));
    return diff / 1000 / 60 / 60;
  };