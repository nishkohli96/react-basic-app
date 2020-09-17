import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import { withStyles, makeStyle } from '@material-ui/core';

const FormPage = () => {
    const [radioValue, setRadioValue] = React.useState('');

    const handleChange = (event) => {
        setRadioValue(event.target.value);
    };

    return (
        <div style={styles.container}>
            <div style={styles.formHeader}> Form </div>
            <div style={styles.divRow}>
                <div style={{ ...styles.divCell, justifyContent: 'center' }}>
                    <TextField id="standard-basic" label="Name" required />
                </div>
                <div style={styles.divCell}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-label="gender"
                            name="gender1"
                            value={radioValue}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formHeader: {
        fontSize: 40,
        color: 'purple',
        marginTop: 10,
    },
    divRow: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        justifyContent: 'space-between',
    },
    divCell: {
        display: 'flex',
        flex: 0.5,
        backgroundColor: 'pink',
        margin: 10,
        width: '40vw',
        height: '10vh',
    },
};
export default FormPage;
