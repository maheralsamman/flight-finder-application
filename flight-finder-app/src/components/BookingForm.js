import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ flight }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  /*   const { arriveAt, depatureAt, flightInfo } = flight;
  const flightId = flightInfo[2];
 */
  const updateSeats = async (flightId, arriveAt, depatureAt) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ arriveAt, depatureAt, seats: 2 }),
    };
    const response = await fetch(
      `http://localhost:3000/api/flights/${flightId}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) alert(data.message);
    navigate("/confirmation", {
      state: {
        flight,
        firstName,
        lastName,
        phone,
        pass,
        email,
        message: data.message,
      },
    });
  };

  const submit = () => {
    if (!firstName || !lastName || !phone || !pass || !email) return;
    if (!flight.secondFlight) {
      const { arriveAt, depatureAt, flightInfo } = flight;
      const flightId = flightInfo[2];
      updateSeats(flightId, arriveAt, depatureAt);
    }
    if (flight.secondFlight) {
      //console.log("flight", flight);
      const { arriveAt: fiArriveAt, depatureAt: fiDepatureAt } =
        flight.firstFlight.flight;
      const fiFlightId = flight.firstFlight.flightInfo[2];
      const { arriveAt: seArriveAt, depatureAt: seDepatureAt } =
        flight.secondFlight.flight;
      const seFlightId = flight.secondFlight.flightInfo[2];

      updateSeats(fiFlightId, fiArriveAt, fiDepatureAt);
      updateSeats(seFlightId, seArriveAt, seDepatureAt);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={firstName}
        required
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        required
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        required
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        value={pass}
        required
        placeholder="Passports Number"
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        type="text"
        value={email}
        required
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={submit}>Book Your Flight</button>
    </div>
  );
};

export default BookingForm;
