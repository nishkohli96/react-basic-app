import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/*  Use this library for validation & error handling in forms
    https://react-hook-form.com/    
*/

const ReactHookForm = () => {
    const { register, handleSubmit, errors } = useForm(); // can import watch
    const onSubmit = (data) => console.log(data);
    const classes = useStyles();
    // console.log(watch('personName')); // watch input value by passing the name of it
    
    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={styles.formField}>
                    <TextField
                        autoFocus={true} // Focus on this field when component loaded
                        label="Name"
                        name="personName"
                        variant="outlined"
                        className={classes.textField}
                        inputRef={register({ required: true, pattern: /^[A-Z a-z]+$/i })}
                        error={errors.personName}
                        helperText={errors.personName? 'Regex err' :'' }
                    /> 
                </div>

                <div style={styles.formField}>
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        className={classes.textField}
                        inputRef={register({ required: true  })}
                    />
                </div>

                <div style={styles.formField}>
                    <TextField
                        label="Phone Number"
                        name="phoneno"
                        variant="outlined"
                        className={classes.textField}
                        inputRef={register({ required: true, minLength: 9, maxLength: 15 })}
                    />
                </div>

                <div style={styles.formField}>
                    <Button
                        variant="outlined"
                        style={{ color: '#21b6ae' }}
                        type='submit'
                    >
                        Submit
                    </Button>

                    <Button
                        variant="outlined"
                        style={{ color: '#21b6ae' }}
                        type='reset'
                    >
                        Clear Form
                    </Button>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        paddingTop: '50px',
        alignItems: 'center'
    },
    formField: {
        marginBottom: '40px',
    },
};

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 400,
        height: 30,
    },
}));

export default ReactHookForm;
