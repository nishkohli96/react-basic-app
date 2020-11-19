import React from 'react';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

import CalendarComp from '../components/CalendarComp';

const CalEvents = () => {
    const [startDate, setStartDate] = React.useState(moment());
    const [endDate, setEndDate] = React.useState(moment().add(30, 'm'));
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const handleDateChange = (date) => {
        console.log('new date ', date);
        setStartDate(date);
    };

    const addEvent = () => {
        console.log('btn clicked');
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
                            <TextField
                                label="Event title"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div style={styles.centerDiv}>
                            <TextField
                                label="Event Description"
                                value={desc}
                                onChange={(event) =>
                                    setDesc(event.target.value)
                                }
                                multiline
                                rowsMax={4}
                            />
                        </div>
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
                        <div style={styles.centerDiv}>
                            <Button
                                onClick={addEvent}
                                style={{
                                    backgroundColor: 'palevioletred',
                                    color: 'white',
                                }}
                                variant="outlined"
                            >
                                Add Event
                            </Button>
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
        marginBottom: 10,
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
