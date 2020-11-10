import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from 'react-router-dom';

import ThemeCompsPage from './ThemeCompsPage';
import LangChange from '../components/LangChange';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
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

    return (
        <div className={classes.root}>
            <p>
                This website is hosted on{' '}
                <a href={netlifyurl} target="_blank" rel="noopener noreferrer">
                    Netlify.
                </a>
                Prefer creating static websites using{' '}
                <a href={gatsbyurl} target="_blank" rel="noopener noreferrer">
                    GatsbyJS.
                </a>
            </p>
            <Button
                style={{ backgroundColor: '#21b6ae', color: 'yellow' }}
                className={classes.button}
                endIcon={<CloudUploadIcon />}
                onClick={fetchData}
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
                variant="contained"
                color="primary"
                disableRipple
                onClick={activateLasers}
            >
                View UI
            </BootstrapButton>

            <BootstrapButton
                variant="outlined"
                color="primary"
                disableRipple
                onClick={() => history.push('/styled')}
            >
                GoTo Styled Components
            </BootstrapButton>

            <Link
                to={{
                    pathname: '/ui',
                    data: { name: 'nish', msg: 'Hi people' },
                }}
            >
                Send data to route
            </Link>

            <Link
                to={{
                    pathname: '/rhform',
                }}
            >
                Go to react-hook form
            </Link>

            <Link
                to={{
                    pathname: '/dashboard',
                }}
            >
                Go to dashboard
            </Link>
            <Link
                to={{
                    pathname: '/redux',
                }}
            >
                Redux &amp; MobX
            </Link>
            <Link
                to={{
                    pathname: '/people',
                }}
            >
                Check Graphql fetch
            </Link>
            <Link
                to={{
                    pathname: '/casl',
                }}
            >
                Casl Example
            </Link>

            <Link to="/carousel">Carousel</Link>
        </div>
    );
}

function activateLasers() {
    window.location.href = '/ui';
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
