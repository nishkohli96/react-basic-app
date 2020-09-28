import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

/* MUI Date & Time Pickers have some dependency issue with @date-io/date-fns v 2.x
   So, prefer using v1.3.13 -> yarn add @date-io/date-fns@1.3.13
*/
const PersonProfile = () => {
    const [avatarURL, setAvatarURL] = useState('');
    const [personName, setPersonName] = useState('');
    const [dob, setDoB] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const classes = useStyles();
    const imageURL =
        'https://images-na.ssl-images-amazon.com/images/I/61z85f1XsgL._AC_SY500_.jpg';
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div style={styles.container}>
            <div style={styles.profile}>
                <div style={styles.leftDiv}>
                    <Avatar
                        alt="Person Image"
                        src={imageURL}
                        className={classes.large}
                        // variant="square"
                    />
                </div>
                <div style={styles.rightDiv}>
                    <div style={styles.formField}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Multiline"
                            value={personName}
                            //   onChange={handleChange}
                            variant="outlined"
                            className={classes.textField}
                        />
                    </div>

                    <div style={styles.formField}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax={4}
                            value={phoneno}
                            className={classes.textField}
                            //   onChange={handleChange}
                        />
                    </div>

                    <div style={styles.formField}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
    },
    leftDiv: {
        flex: 0.4,
        display: 'flex',
        justifyContent: 'center',
    },
    rightDiv: {
        flex: 0.6,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    avatar: {
        width: '200',
        height: '200',
    },
    formField: {
        marginBottom: '40px',
    },
};

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    textField: {
        width: 450,
        height: 40,
    },
}));

export default PersonProfile;
