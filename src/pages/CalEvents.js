import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

import CalendarComp from '../components/CalendarComp';

const CalEvents = () => {
    const [startDate, setStartDate] = React.useState(moment());
    const [endDate, setEndDate] = React.useState(moment().add(30, 'm'));

    const handleDateChange = (date) => {
        console.log('new date ', date);
        setStartDate(date);
    };

    return (
        <div style={styles.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper style={styles.paper}>
                            <div style={styles.heading}>
                                Select Date &amp; Time to add event to
                                fullcalendar
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div style={styles.centerDiv}>
                            <DateTimePicker
                                margin="normal"
                                label="Start Date &amp; Time"
                                variant="inline"
                                format="dd MMM yyyy hh:mm aa"
                                value={startDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div style={styles.centerDiv}>
                            <DateTimePicker
                                margin="normal"
                                label="End Date &amp; Time"
                                variant="inline"
                                format="dd MMM yyyy hh:mm aa"
                                value={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={styles.calDiv}>
                            <CalendarComp />
                        </div>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 20,
    },
    paper: {
        padding: 5,
    },
    centerDiv: {
        display: 'flex',
        justifyContent: 'center',
    },
    calDiv: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        padding: 20,
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'crimson',
    },
};

export default CalEvents;
