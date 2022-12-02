import React from 'react'
import { useLocation } from "react-router-dom";
const Confirmation = () => {
    const location = useLocation();
    console.log(location.state);


  return (
    <div>Confirmation</div>
  )
}

export default Confirmation