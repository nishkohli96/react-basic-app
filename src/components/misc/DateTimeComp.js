import React, { useState, useEffect } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { DateUtils } from 'react-day-picker';
import TextField from '@material-ui/core/TextField';

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
    const CustomDatePicker = ({
        classNames,
        selectedDay,
        children,
        ...props
    }) => {
        return (
            <div
                className={classNames.overlayWrapper}
                style={styles.calPos}
                {...props}
            >
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
        if (multiple) {
            let dateArr =
                selectedDays.length >= 1 ? [...selectedDays] : [selectedDays];

            const selectedIndex = dateArr.findIndex((selectedDay) =>
                DateUtils.isSameDay(selectedDay, day)
            );
            if (selectedIndex === -1) {
                dateArr.push(adjustTime(day));
            } else if (selectedIndex === 0 && dateArr.length === 1) {
                return;
            } else if (dateArr.length > 1) {
                dateArr.splice(selectedIndex, 1);
            }
            setSelectedDays(dateArr);
            console.log(dateArr);
        } else {
            setSelectedDays([adjustTime(day)]);
        }
    };

    const modifiers = {
        weekends: { daysOfWeek: [0, 6] },
        today: new Date(),
    };

    const modifiersStyles = {
        today: {
            color: '#ffc107',
        },
        weekends: {
            color: '#ffc107',
        },
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
            &nbsp; &nbsp;
            <DayPickerInput
                component={(props) => (
                    <TextField
                        multiline
                        rowsMax={4}
                        label="Select Date(s)"
                        style={styles.dateField}
                        {...props}
                    />
                )}
                overlayComponent={CustomDatePicker}
                value={selectedDays}
                keepFocus={false}
                formatDate={formatDate}
                parseDate={parseDate}
                format="DD MMM yyyy"
                dayPickerProps={{
                    // the calendar properties
                    firstDayOfWeek: 1,
                    selectedDays: selectedDays,
                    disabledDays: [
                        {
                            after: moment().add(7, 'd').toDate(),
                            before: moment().toDate(),
                        },
                    ],
                    onDayClick: handleDayClick,
                    modifiers: modifiers,
                    modifiersStyles: modifiersStyles,
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
    dateField: {
        marginTop: 40,
        width: 400,
        height: 80,
    },
};

export default DateTimeComp;
