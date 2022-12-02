import React, { useState } from "react";
import Search from "../components/Search";
import OneWayTrip from "../components/OneWayTrip";
import TwoWaysTrip from "../components/TwoWaysTrip";
import { search, flightDuration } from "../util/functions";

const Home = ({ flights }) => {
  const [searchedFlights, setSearchedFlights] = useState([]);

  return (
    <div>
      <Search
        flights={flights}
        search={search}
        setSearchedFlights={setSearchedFlights}
      />
      {searchedFlights.length && searchedFlights[0].length === 1 ? (
        <OneWayTrip
          searchedFlights={searchedFlights}
          flightDuration={flightDuration}
        />
      ) : searchedFlights.length && searchedFlights[1].length === 2 ? (
        <TwoWaysTrip
          searchedFlights={searchedFlights}
          flightDuration={flightDuration}
        />
      ) : (
        ""
      )}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
