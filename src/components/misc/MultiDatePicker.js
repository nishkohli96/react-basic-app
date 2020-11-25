import React, { useState, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import moment from 'moment';

const MultiDatePicker = ({ date }) => {
    
    const [pickerDate, setPickerDate] = useState(new DateObject());

    useEffect(() => {
        const newDate = new DateObject(date)
        setPickerDate(newDate);
        console.log(date)
    },[date])

    return (
        <DatePicker 
            format={"DD MMM YYYY"}
            value={pickerDate} 
            onChange={(date) => setPickerDate(date)}
            multiple={true}
            minDate={new DateObject()}
            // maxDate={new DateObject(moment().add(7, 'd').toDate())}
        />
    );
}

export default MultiDatePicker;