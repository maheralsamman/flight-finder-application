import React, { useState, useEffect } from "react";
import DatePickArriveAt from "../components/DatePickArriveAt";
import DatePickDepatureAt from "../components/DatePickDepatureAt";

const Search = ({ search }) => {
  const [depatureAt, setDepatureAt] = useState(new Date());
  const [arriveAt, setArriveAt] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [withReturn, setWithReturn] = useState(false);
  const [passengers, setPassengers] = useState(0);

  const dateHandler = (date) => {
    const nowDepatureAt = new Date(date);
    nowDepatureAt.setHours(nowDepatureAt.getHours() + 1);
    return nowDepatureAt.toISOString();
  };
  //const aoo = flights[0].itineraries[0].depatureAt
  // console.log("depatureAt", flights); // "2022-12-12T12:30:00"
  const submit = () => {
    /*     console.log(departure);
    console.log(arrival);
    console.log(dateHandler(depatureAt));
    console.log(dateHandler(arriveAt));
    console.log(withReturn);
    console.log(passengers); */
    search({
      departure,
      arrival,
      depatureAt: dateHandler(depatureAt),
      arriveAt: dateHandler(arriveAt),
      withReturn,
      passengers: +passengers,
    });
    //console.log(flights[0].itineraries[0].depatureAt);
  };
  //console.log(date, "2022-12-12T12:30:00")
  //console.log(date > "2022-12-12T12:30:00" ? "True": "false")
  // How many passengers; adults (12+) and/or children
  return (
    <div>
      <input
        value={departure}
        onInput={(e) => setDeparture(e.target.value)}
        placeholder="Departure"
        type="text"
        name="departure"
        id=""
      />
      <input
        value={arrival}
        onInput={(e) => setArrival(e.target.value)}
        placeholder="Arrival"
        type="text"
        name="arrival"
        id=""
      />
      <label>depatureAt</label>
      <DatePickDepatureAt
        depatureAt={depatureAt}
        setDepatureAt={setDepatureAt}
      />
      <label>arriveAt</label>
      <DatePickArriveAt arriveAt={arriveAt} setArriveAt={setArriveAt} />
      <label>
        How many passengers?
        <input
          type="number"
          min="0"
          value={passengers}
          name=""
          onChange={(e) => setPassengers(e.target.value)}
          id=""
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={withReturn}
          onChange={() => setWithReturn((i) => !i)}
        />
        Round trip?
      </label>
      <button onClick={submit}>Search</button>
    </div>
  );
};

export default Search;
