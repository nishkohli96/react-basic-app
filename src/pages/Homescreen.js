import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import ThemeCompsPage from './ThemeCompsPage';
import LangChange from 'components/Lib-Utilize/LangChange';
import PageLinks from '@Misc/PageLinks';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    gradientBtn: {
        color: 'salmon',
        background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,94,166,1) 33%, rgba(48,126,142,1) 100%)',
    },
    gradientBtn2: {
        color: 'salmon',
    },
}));

const BootstrapButton = withStyles({
    root: {
        fontSize: 16,
        textTransform: 'none', // else it wud caps all the text
        borderColor: '#007ABA',
        fontFamily: ['"Helvetica Neue"'].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: 'red',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
    button: {
        backgroundColor: 'orange',
        color: '#007aba',
    },
})(Button);

function Reactbtns() {
    const classes = useStyles();
    const history = useHistory();
    const netlifyurl = 'https://www.netlify.com/';
    const gatsbyurl = 'https://www.gatsbyjs.com/';

    function activateLasers() {
        history.push('/ui');
    }

    return (
        <div className={classes.root}>
            <p>
                This website is hosted on{' '}
                <a href={netlifyurl} target="_blank" rel="noopener noreferrer">
                    Netlify.
                </a>
                &nbsp; Prefer creating static websites using{' '}
                <a href={gatsbyurl} target="_blank" rel="noopener noreferrer">
                    GatsbyJS.
                </a>
            </p>
            <p>
                Env being used is <b>{process.env.REACT_APP_ENV_VAR}</b>
            </p>
            <Button
                className={classes.gradientBtn2}
                endIcon={<CloudUploadIcon />}
                onClick={fetchData}
                variant="outlined"
            >
                Fetch data
            </Button>
            <br />
            <Button
                variant="outlined"
                style={{ color: '#21b6ae' }}
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={sendData}
            >
                Login
            </Button>
            <BootstrapButton
                color="primary"
                className={classes.gradientBtn}
                onClick={activateLasers}
            >
                View UI
            </BootstrapButton>

            <BootstrapButton
                color="primary"
                onClick={() => history.push('/styled')}
            >
                GoTo Styled Components
            </BootstrapButton>

            <PageLinks />
        </div>
    );
}

/* Run node server */
function fetchData() {
    fetch('http://localhost:4000/items', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );
}

function sendData() {
    const data = {
        username: 'nk@qw.qw',
        password: 'nish134',
    };

    fetch('http://localhost:4000/data', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );
}

class Homescreen extends React.Component {
    render() {
        return (
            <>
                <React.Suspense fallback="loading translations.....">
                    <LangChange />
                </React.Suspense>
                <ThemeCompsPage />
                <Reactbtns />
            </>
        );
    }
}

export default Homescreen;
