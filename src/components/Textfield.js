import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const CustomSwitch = withStyles({
    switchBase: {
        color: 'yellow',
        '&$checked': {
            color: 'red',
        },
        '&$checked + $track': {
            backgroundColor: '#006699',
        },
    },
    checked: {},
    track: {},
})(Switch);

const handleChange = (event) => {
    if (event.target.checked) {
        document.getElementById('standard-required').value =
            'Switch Toggled On';
    } else {
        document.getElementById('standard-required').value = 'Toggled Off';
    }
};

function TextFieldsFunction() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{ readOnly: true }}
                />
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                />
                <FormControlLabel
                    control={
                        <Switch
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Change value of reqd field"
                />{' '}
                <br />
                <FormControlLabel
                    control={
                        <CustomSwitch onChange={handleChange} name="checkedC" />
                    }
                    label="Change value of reqd field"
                />
            </div>
        </form>
    );
}

class Textfield extends React.Component {
    render() {
        return <TextFieldsFunction />;
    }
}

export default Textfield;
