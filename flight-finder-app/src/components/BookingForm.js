import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const BookingForm = ({ flight }) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")

    const submit = () => {
        navigate("/confirmation", {state:{flight, firstName, lastName, phone, pass, email}});
    }
  return (
    <div>

        <input type="text" value={firstName} required placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastName} required placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <input type="text" value={phone} required placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
        <input type="text" value={pass} required placeholder="Passports Number" onChange={(e) => setPass(e.target.value)} />
        <input type="text" value={email} required placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={submit}>Book Your Flight</button>
    </div>
  )
}

export default BookingForm