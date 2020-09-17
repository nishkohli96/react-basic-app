import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

/*  
  Use this library for validation & error handling in forms
      https://react-hook-form.com/    
*/

const ReactHookForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch('example')); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" defaultValue="test" ref={register} />
            <input name="exampleRequired" ref={register({ required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
                name="dummytext"
                margin="normal"
                inputRef={register}
                label="Enter Text"
            />
            <input type="submit" />
        </form>
    );
};

export default ReactHookForm;
