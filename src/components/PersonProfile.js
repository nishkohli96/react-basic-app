import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

/* MUI Date & Time Pickers have some dependency issue with @date-io/date-fns v 2.x
   So, prefer using v1.3.13 -> yarn add @date-io/date-fns@1.3.13
*/

const PersonProfile = ({ Person }) => {
    /*  Since this a functional component, it needs to update everytime when Person
        obj value changes */
    useEffect(() => {
        setAvatarURL(Person.imageUrl.url);
        setPersonName(Person.name);
        setDoB(Person.dob);
        setPhoneNo(Person.phoneno);
    }, [Person]);

    const [avatarURL, setAvatarURL] = useState(Person.imageUrl.url);
    const [personName, setPersonName] = useState(Person.name);
    const [dob, setDoB] = useState(Person.dob);
    const [phoneno, setPhoneNo] = useState(Person.phoneno);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const classes = useStyles();

    return (
        <div style={styles.container}>
            <div style={styles.profile}>
                <div style={styles.leftDiv}>
                    <Avatar
                        alt="Person Image"
                        src={avatarURL}
                        className={classes.large}
                        // variant='square'
                    />
                </div>
                <div style={styles.rightDiv}>
                    <div style={styles.formField}>
                        <TextField
                            label="Name"
                            value={personName}
                            onChange={(event) =>
                                setPersonName(event.target.value)
                            }
                            variant="outlined"
                            className={classes.textField}
                        />
                    </div>

                    <div style={styles.formField}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Phone Number"
                            multiline
                            rowsMax={4}
                            value={phoneno}
                            className={classes.textField}
                            onChange={(event) => setPhoneNo(event.target.value)}
                        />
                    </div>

                    <div style={styles.formField}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date of Birth"
                                format="dd/MM/yyyy"
                                value={dob}
                                onChange={(date) => setDoB(date)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                className={classes.textField}
                                readOnly
                            />
                        </MuiPickersUtilsProvider>
                    </div>

                    <div style={styles.formField}>
                        <TextField
                            label="Enter Password"
                            className={classes.textField}
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                // <-- This is where the toggle button is added.
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {showPassword ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
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
        width: 400,
        height: 40,
    },
}));

export default PersonProfile;
