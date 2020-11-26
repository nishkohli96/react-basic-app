import React, { useState, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import moment from 'moment';

const MultiDatePicker = ({ inputDate }) => {
    const [pickerDate, setPickerDate] = useState(new DateObject());
    const today = new DateObject();

    const CustomComponent = (props) => {
        return <>{this.props.stringDate}</>;
    };

    useEffect(() => {
        // const newDate = new DateObject(inputDate).convert("gregorian").format("DD MMM YYYY");
        setPickerDate(inputDate);
    }, [inputDate]);

    return (
        <DatePicker
            format="DD MMM YYYY"
            value={pickerDate}
            onChange={(date) => setPickerDate(date)}
            multiple={true}
            style={styles.picker}
            render={<CustomComponent />}
            range
            minDate={moment()}
            maxDate={new DateObject(today).setDay(today.day + 7)}
        />
    );
};

const styles = {
    picker: {
        backgroundColor: 'white',
        height: 25,
        borderRadius: '8px',
        fontSize: '15px',
        padding: '3px 10px',
        width: 200,
    },
};

export default MultiDatePicker;
