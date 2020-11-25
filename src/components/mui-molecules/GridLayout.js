import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// Export some other Components from files in the components folder
// import DatePicker from './DatePicker'; // some err in the module

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'blue',
        // backgroundColor:'lightgreen'
    },
    fabGreen: {
        color: 'blue',
        backgroundColor: 'orange',
        '&:hover': {
            backgroundColor: 'teal',
        },
    },
}));
const GreenCheckbox = withStyles({
    root: {
        color: 'pink', //when cb is unchecked
        '&$checked': {
            color: 'blue', // when cb checked
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function GridLayout() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
        checkedF: true,
        checkedG: true,
    });

    const handleCBChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const fabClicked = (event) => {
        console.log('fab btn clicked');
    };

    return (
        <div>
            Inside form body
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={5} className={classes.paper}>
                            <FormControlLabel
                                checked={state.checkedB}
                                control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleCBChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <FormControlLabel
                                checked={state.checkedA}
                                control={
                                    <Checkbox
                                        icon={<Favorite />}
                                        checkedIcon={<Favorite />}
                                        name="checkedA"
                                        onChange={handleCBChange}
                                    />
                                }
                                label="Custom icon"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <FormControlLabel
                                control={
                                    <GreenCheckbox
                                        checked={state.checkedC}
                                        onChange={handleCBChange}
                                        name="checkedC"
                                    />
                                }
                                label="Custom color"
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Fab
                className={classes.fabGreen}
                onClick={fabClicked}
                size="small"
                aria-label="add"
            >
                {' '}
                <AddIcon />{' '}
            </Fab>
            {/* <DatePicker /> */}
        </div>
    );
}
