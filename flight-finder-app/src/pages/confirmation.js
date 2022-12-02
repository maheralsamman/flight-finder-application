import React from 'react'
import { useLocation } from "react-router-dom";
const Confirmation = () => {
    const location = useLocation();
    console.log(location.state);


  return (
    <div>
        <p>
        Confirmation
        </p>

        <p>{location.state.message}</p>
    </div>
  )
}

export default Confirmation