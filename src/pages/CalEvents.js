import React, { useState } from 'react';
import moment from 'moment';
import { nanoid } from 'nanoid';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

import CalendarComp from '../components/misc/CalendarComp';

const eventColors = [
    'orange',
    'silver',
    'pink',
    'lightblue',
    'beige',
    'lightgreen',
    'violet',
];

const CalEvents = () => {
    const classes = useStyles();
    const [newEvent, setNewEvent] = useState({});
    const [startDate, setStartDate] = useState(moment().add(15, 'm'));
    // 15 mins from current time
    const [endDate, setEndDate] = useState(moment().add(45, 'm'));
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [alertMsg, setAlertMsg] = useState('');
    const [dialogOpen, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleStartDate = (date) => {
        /*  Handle err if start date has already passed current time. Also setting end
            date to atleast 30 mins after setting new start date */

        /*  Keeping atleast 15 mins diff between start and end date; diff value would be
            less than one if start and end time diff less than 15 mins */
        const diff = (moment(date) - moment()) / (15 * 60 * 1000);

        if (diff <= 1) {
            setAlertMsg('Please select start time atleast 15 mins from now');
            setOpen(true);
            setStartDate(moment().add(15, 'm'));
            setEndDate(moment().add(45, 'm'));
        } else {
            setStartDate(date);
            setEndDate(moment(date).add(30, 'm'));
        }
    };

    const handleEndDate = (date) => {
        /* Handle condition to make sure that endDate > startDate */
        const diff = (moment(date) - startDate) / (15 * 60 * 1000);

        if (diff <= 1) {
            setAlertMsg('End Date should be greater than start date');
            setOpen(true);
            setEndDate(moment(startDate).add(30, 'm'));
        } else {
            setEndDate(date);
        }
    };

    /*  Random no fn.
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Taking Lower limit as 0 and upper limit as length of eventColors array
*/
    const addEvent = () => {
        const eventColor =
            eventColors[Math.floor(Math.random() * (eventColors.length + 1))];

        const event = {
            id: nanoid(10),
            title,
            start: moment(startDate).toDate(),
            end: moment(endDate).toDate(),
            backgroundColor: eventColor,
            borderColor: eventColor,
            extendedProps: {
                desc,
            },
        };
        // console.log(event)
        setNewEvent(event);

        /* Reset the form fields */
        setTitle('');
        setDesc('');
        setStartDate(moment().add(15, 'm'));
        setEndDate(moment().add(45, 'm'));
    };

    return (
        <div style={styles.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
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
                                format="dd MMM yyyy HH:mm" // hh:mm aa for 12 hr
                                value={startDate}
                                onChange={(date) => handleStartDate(date)}
                                disablePast={true} // to disable selecting prev dates
                                // minDate={new Date().add(3,'d')}
                                // maxDate={moment().add(7,'d')}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div style={styles.centerDiv}>
                            <DateTimePicker
                                margin="normal"
                                label="End Date &amp; Time"
                                variant="inline"
                                format="dd MMM yyyy HH:mm"
                                value={endDate}
                                onChange={(date) => handleEndDate(date)}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={styles.centerDiv}>
                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: 'palevioletred',
                                    color: 'white',
                                }}
                                onClick={() => addEvent()}
                                variant="outlined"
                            >
                                Add Event
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={styles.calDiv}>
                            <CalendarComp newEvent={newEvent} />
                        </div>
                    </Grid>
                </Grid>

                <Snackbar
                    open={dialogOpen}
                    autoHideDuration={5000}
                    onClose={handleClose}
                >
                    <Alert onClose={() => handleClose()} severity="warning">
                        {alertMsg}
                    </Alert>
                </Snackbar>
            </MuiPickersUtilsProvider>
        </div>
    );
};

const useStyles = makeStyles(() => ({
    paper: {
        padding: 5,
        marginBottom: 10,
    },
}));

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 20,
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
