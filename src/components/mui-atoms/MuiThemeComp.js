import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import BlueTheme from '../../themes/mui-blue';

const MuiThemeComp = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ThemeProvider theme={BlueTheme}>
                <Container maxWidth="700">
                    <Paper className={classes.paper}>
                        <p>hiu</p>
                    </Paper>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
};

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
}));

export default MuiThemeComp;
