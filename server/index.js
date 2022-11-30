//const express = require('express');
import express from "express";
//import flights from './flights.json' assert { type: `json` };;
//const flights = require('./flights.json');

/* const fs = require('fs')
let flights = JSON.parse(fs.readFileSync('flights.json', 'utf-8'))
 */
import { readFile } from "fs/promises";
import { writeFileSync } from "fs";
const flights = await readFile("flights.json")
  .then((json) => JSON.parse(json))
  .catch(() => null);

const app = express();
const writeToFlights = (file) => {
  writeFileSync("flights.json", JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log("writing to" + fileName);
  });
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const findById = (id) => flights.find((flight) => flight.flight_id === id);

const getFlights = (req, res) => {
  res.status(200).json(flights);
};
const getFlightById = (req, res) => {
  const flightById = findById(req.params.id);
  if (!flightById) {
    return res
      .status(404)
      .json({ error: `No flight found with id: ${req.params.id}` });
  }
  return res.status(200).json(flightById);
};

const updateFlight = (req, res) => {
  const flightById = findById(req.params.id);
  if (!flightById) return res.status(404).json({ message: "No flight found" });
  const flight = flightById.itineraries.find(
    (choosenFlight) =>
      choosenFlight.depatureAt == req.body.depatureAt &&
      choosenFlight.arriveAt == req.body.arriveAt
  );
  //console.log(flight)

  if (!flight)
    return res.status(404).json({ message: "No flight found with this date" });
  if (flight.avaliableSeats < req.body.seats)
    return res
      .status(404)
      .json({ message: `only ${flight.avaliableSeats} seats available` });
  if (!req.body.seats)
    return res.status(404).json({ message: "Number of seats are not set!" });
  if (flight && flight.avaliableSeats > 0) {
    const updatedFlight = flightById;
    updatedFlight.itineraries[
      flightById.itineraries.indexOf(flight)
    ].avaliableSeats -= req.body.seats;

    flights.splice(flights.indexOf(flightById), 1, updatedFlight);
    writeToFlights(flights);
    return res.status(200).json({ message: "the booking was successful" });
  }
};

// ENDPOINTS
app.get("/api/flights", getFlights).get("/api/flights/:id", getFlightById);

app.put("/api/flights/:id", updateFlight);

const server = app.listen(3000, function () {
  console.log("Express server listening on port 3000");
});
server.timeout = 3000;
