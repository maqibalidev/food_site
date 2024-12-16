import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './test.css'; 
import { setHours, setMinutes } from 'date-fns'; 
import moment from 'moment';

const Test = () => {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 17));
  const [endDate, setEndDate] = useState(null);

  const handleChange = (date) => {
    const formattedDate = moment(date).format('D-MMM'); 
    // const formattedDate = format(date,'dd-MMM'); 
    console.log(formattedDate);
    setStartDate(date); 
  };

  return (
    <div className='mt-5 d-flex align-items-center justify-content-center'>
  
     <DatePicker
       className="custom-datepicker"
       selected={startDate}
       onChange={(date) => handleChange(date)}
       startDate={startDate}
       endDate={endDate}
       dateFormat="d-MMM"
       dateFormatCalendar="MMMM"
     />

    </div>
  );
}

export default Test;
