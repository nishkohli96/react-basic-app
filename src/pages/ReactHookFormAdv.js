import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { RHFSelect, RHFTextField } from '@MuiAtoms/RHFComps';

const ReactHookFormAdv = () => {
    const initialVals = {
        brawler: 'Edgar',
    };

    const { register, handleSubmit, errors, control } = useForm({
        defaultValues: initialVals,
    });

    /* For single field-arrays, you don't need to use alias */
    const {
        fields: hobbiesField,
        append: hobbiesAdd,
        remove: hobbiesRemove,
    } = useFieldArray({
        control,
        name: 'hobbies', // form control name
    });

    const {
        fields: colorFields,
        append: colorAppend,
        remove: colorRemove,
    } = useFieldArray({
        control,
        name: 'colors',
    });

    const brawlers = ['Colt', 'Dynamike', 'Edgar', 'Bull', 'Crow'];
    const submitForm = (values) => console.log(values);

    /* Always provide a defaultValue field for the below controls */
    return (
        <div style={{ width: 200, padding: 10, margin: 10 }}>
            <form onSubmit={handleSubmit(submitForm)}>
                <Controller
                    control={control}
                    name="brawler"
                    type="select"
                    defaultValue={initialVals.brawler}
                    rules={{ required: true }}
                    render={({ onChange, onBlur, value }) => (
                        <RHFSelect
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            options={brawlers}
                        />
                    )}
                />
                <div style={{ margin: 20 }}></div>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    ref={register({
                        required: true,
                        message: 'Please upload a file',
                    })}
                />

                <p style={{ color: 'tomato', marginTop: 20 }}>
                    {errors?.image?.message}
                </p>
                <br />

                <p>Add Hobbies </p>
                <br />
                {hobbiesField.map((_, index) => (
                    <div
                        key={_.id}
                        style={{
                            marginBottom: '10px',
                        }}
                    >
                        <RHFTextField
                            name={`hobbies[${index}].name`}
                            placeholder="Add a hobby"
                            inputRef={register()}
                            // defaultValue={initialValues.hobbies[index].text}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => {
                        const len = hobbiesField.length;
                        if (len >= 2) {
                            hobbiesRemove(hobbiesField.length - 1);
                        }
                    }}
                >
                    -
                </button>
                <button type="button" onClick={() => hobbiesAdd('')}>
                    +
                </button>

                <p>Add Colors </p>
                <br />
                {colorFields.map((_, index) => (
                    <div
                        key={_.id}
                        style={{
                            marginBottom: '10px',
                        }}
                    >
                        <RHFTextField
                            name={`colors[${index}].text`}
                            placeholder="Add color"
                            inputRef={register()}
                            // defaultValue={
                            //     initialValues.achievements[index].text
                            // }
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => {
                        const len = colorFields.length;
                        if (len >= 2) {
                            colorRemove(colorFields.length - 1);
                        }
                    }}
                >
                    -
                </button>
                <button type="button" onClick={() => colorAppend('red')}>
                    +
                </button>
                <br />

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
            </form>
        </div>
    );
};

export default ReactHookFormAdv;
