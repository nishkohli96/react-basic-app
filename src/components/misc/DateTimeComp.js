import React, { useState, useEffect } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate } from 'react-day-picker/moment';
import { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import 'rc-time-picker/assets/index.css';

const DateTimeComp = ({ inputDate }) => {
    const [startTime, setStartTime] = useState(moment()); // not taking  new Date()
    const [selectedDays, setSelectedDays] = useState(moment().toDate());
    const [multiple] = useState(true); // flag to select multiple dates

    useEffect(() => {
        console.log('input ', inputDate);
        setSelectedDays(inputDate);
        setStartTime(moment(inputDate));
    }, [inputDate]);

    /*  Customize as per requirement 
        https://react-day-picker.js.org/examples/input-custom-overlay */
    const CustomDatePicker = ({ children, ...props }) => {
        return (
            <div style={styles.calPos} {...props}>
                {children}
            </div>
        );
    };

    const handleStartTime = (time) => {
        setStartTime(time);
        console.log(time);
    };

    /* Set the date(s) recieved from your datepicker to adjust to this time*/
    const adjustTime = (date) => {
        const newTime = moment(date)
            .set({
                hour: inputDate.getHours(),
                minute: inputDate.getMinutes(),
            })
            .toDate();
        return newTime;
    };

    const handleDayClick = (day) => {
        console.log('selected ', new Date(day));
        console.log(selectedDays);
        // if(multiple) {
        //     let dateArr = selectedDays.length >= 1 ? [...selectedDays]: [selectedDays];

        //     const selectedIndex = dateArr.findIndex(selectedDay =>
        //         DateUtils.isSameDay(selectedDay, day)
        //     );
        //     if(selectedIndex === -1 ) {
        //         dateArr.push(startTime);
        //     }
        //     else if(selectedIndex === 0 && dateArr.length === 1){
        //         return;
        //     }
        //     else if(dateArr.length > 1) {
        //         dateArr.splice(selectedIndex, 1);
        //     }
        //     setSelectedDays(dateArr);
        //     console.log(dateArr);
        // }
        // else {
        // setSelectedDays(adjustTime(day));
        // }
    };

    return (
        <>
            <TimePicker
                value={startTime}
                onChange={(time) => handleStartTime(time)}
                showSecond={false}
                minuteStep={15}
                allowEmpty={false}
                inputReadOnly
            />

            <DayPickerInput
                // overlayComponent={CustomDatePicker}
                value={selectedDays}
                keepFocus={false}
                format="DD MMM yyyy"
                formatDate={formatDate}
                dayPickerProps={{
                    // the calendar properties
                    selectedDays: selectedDays,
                    disabledDays: [
                        {
                            after: moment().add(7, 'd').toDate(),
                            before: moment().toDate(),
                        },
                    ],
                    onDayClick: handleDayClick,
                }}
            />
        </>
    );
};

const styles = {
    calPos: {
        // position: 'fixed',
        // bottom: 75,
        backgroundColor: 'white',
    },
};

export default DateTimeComp;
