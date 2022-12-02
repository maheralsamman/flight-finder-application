import { useState, useEffect  } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import "./App.css";
import Booking from "./pages/booking";
import Confirmation from "./pages/confirmation";
import Home from "./pages/home";


function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getData =async () => {
      const response = await fetch("http://localhost:3000/api/flights/");
      const data = await response.json();
      console.log(data)
      setFlights(data);
    }
    getData();
  }, [])
  
  
  return (
    <div className="App">
           <header /* className="App-header" */>
            <h1>Header</h1>
      </header>
      <Routes>
        <Route index path="/" element={<Home  flights={flights}/>} />
        <Route path="home" element={<Home flights={flights}/>} />
        <Route path="booking" element={<Booking />} />
        <Route path="confirmation" element={<Confirmation />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/home">Go to the home page</Link>
      </p>
    </div>
  );
}
/*
#### TODO LIST:
- SEARCH BAR WITH : 
Departure destination and arrival destination 
One way trip or round trip
Departure date, and possible Return date (Feel free to use libraries like react-datepicker here)
How many passengers; adults (12+) and/or children
--------------------
-  A display list of flights after search
------------------------------------------
The list should include cards with flight information displayed.
If a round trip is selected 
it should either show a card for each possible flight combination (back and forth),
or let the user first select a departure flight and then select a return flight 
-------------------
Each card should display; 
the destinations together with time of departure & arrival, 
duration of flight and price for adults
--------------------
Users should be able to click on a card and get information
on available seats and the price for both adults and children, 
and also be displayed with the “book” button. 
This could show by expanding the card size, but exactly how is up to you 
--------------------------------





The “book” button; clicking on it should redirect to 
a new URL for booking the specific flight
---------------------------------
In the booking the user should be able to 
put in their information for each passenger
----------------------------
Before booking is completed the user should be displayed 
again all info on flight (time, total price for all passengers) 
and the passenger info they gave, so they can give a final approval. 
Then a final “book” button, clicking it should tell the user the booking was successful 
-------------------------------
For each booking the available seats should be updated in your backend
-----------------------------
While waiting the UI should show loading here

----------------------------
---------------------------
(optional) The user should be able to sort based on price, duration and departure time
(optional) Have a button that changes the theme of the page from light to dark

*/
