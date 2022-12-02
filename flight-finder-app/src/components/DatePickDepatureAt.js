import React from "react";
import DatePicker from "react-datepicker";


//import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
//import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DatePick = ({depatureAt, setDepatureAt}) => {
  //const [startDate, setStartDate] = useState(new Date());

/*   useEffect(() => {
    console.log(startDate);
    let date = new Date(startDate).toISOString();
    console.log(date, "2022-12-12T12:30:00")
    console.log(date > "2022-12-12T12:30:00" ? "True": "false")
  }, [startDate]);
 */
  return (
    <DatePicker
    selected={depatureAt} 
    timeInputLabel="Time:"
    dateFormat="MM/dd/yyyy h:mm aa"
    showTimeInput
    onChange={(date) => setDepatureAt(date)} />
  );
};

export default DatePick;
