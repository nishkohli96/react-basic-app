import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { RHFTextField, RHFNumberInput } from '@MuiAtoms/RHFComps';

/*  Use this library for validation & error handling in forms
    https://react-hook-form.com/    
*/

const initialVals = {
    personName: 'some name',
    email: '',
    phoneno: '1234',
};

const ReactHookForm = () => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: initialVals,
    }); // can import watch
    const onSubmit = (data) => console.log(data);
    const classes = useStyles();
    // console.log(watch('personName')); // watch input value by passing the name of it

    /*  Can also use schema for validation 
        https://react-hook-form.com/get-started#SchemaValidation
    */
    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={styles.formField}>
                    <RHFTextField
                        autoFocus={true} // Focus on this field when component loaded
                        label="Name"
                        name="personName"
                        variant="outlined"
                        className={classes.textField}
                        inputRef={register({
                            required: {
                                value: true,
                                message: 'Please fill this field',
                            },
                            pattern: {
                                value: /^[A-Z a-z]+$/i,
                                message: 'Not a valid pattern',
                            },
                        })}
                        error={errors?.personName ? true : false}
                        helperText={errors?.personName?.message}
                    />
                </div>

                <div style={styles.formField}>
                    <RHFTextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        className={classes.textField}
                        inputRef={register({
                            required: {
                                value: true,
                                message: 'Please fill this field',
                            },
                        })}
                        error={errors?.email ? true : false}
                        helperText={errors?.email?.message}
                    />
                </div>

                <div style={styles.formField}>
                    <RHFNumberInput
                        label="Phone Number"
                        name="phoneno"
                        variant="outlined"
                        className={classes.textField}
                        inputRef={register({
                            required: {
                                value: true,
                                message: 'Please fill this field',
                            },
                            pattern: {
                                value: /^[0-9]+$/i,
                                message: 'Not a valid pattern',
                            },
                            minLength: {
                                value: 9,
                                message: 'Min 9 chars',
                            },
                            maxLength: {
                                value: 15,
                                message: 'Max 15 chars',
                            },
                        })}
                        error={errors?.phoneno ? true : false}
                        helperText={errors?.phoneno?.message}
                    />
                </div>

                <div style={styles.formField}>
                    <Button
                        variant="outlined"
                        style={{ color: '#21b6ae' }}
                        type="submit"
                    >
                        Submit
                    </Button>

                    <Button
                        variant="outlined"
                        style={{ color: '#21b6ae' }}
                        type="reset"
                    >
                        Clear Form
                    </Button>
                </div>
            </form>
            <Link to="rhf-adv">Go to advance RHF</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        paddingTop: '50px',
        alignItems: 'center',
    },
    formField: {
        marginBottom: '50px',
    },
};

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 400,
        height: 30,
    },
}));

export default ReactHookForm;
