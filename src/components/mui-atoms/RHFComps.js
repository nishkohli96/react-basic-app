import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export const RHFSelect = (props) => {
    const selectOptions = props.options.map((item, index) => (
        <MenuItem key={index} value={item}>
            {item}
        </MenuItem>
    ));

    return (
        <React.Fragment>
            <Select
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                fullWidth
                native={false}
                {...props}
            >
                <MenuItem disabled value="">
                    none
                </MenuItem>
                {selectOptions}
            </Select>
        </React.Fragment>
    );
};

export const RHFTextField = (props) => {
    return (
        <TextField
            name={props.name}
            variant="outlined"
            inputRef={props.inputRef}
            error={props.errors}
            helperText={props.helperText}
            fullWidth
            margin="dense"
            {...props}
        />
    );
};

export const RHFNumberInput = (props) => {
    return (
        <TextField
            name={props.name}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            variant="outlined"
            inputRef={props.inputRef}
            error={props.errors}
            helperText={props.helperText}
            fullWidth
            margin="dense"
            {...props}
        />
    );
};
