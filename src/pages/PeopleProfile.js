import React from 'react';
import { getAllPersons, query } from '../graphql/queries';

const { REACT_APP_SPACE_ID, REACT_APP_CONTENT_API } = process.env;

const graphiqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?access_token=${REACT_APP_CONTENT_API}`;

const fetchData = () => {
    fetch(graphiqlURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({getAllPersons}),
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
};

const PeopleProfile = () => {
    fetchData();

    return (
        <div style={styles.container}>
            <div style={styles.leftDiv}>
                <h1 style={styles.header}> Add/Edit People </h1>
            </div>
            <div style={styles.rightDiv}>
                <h1 style={styles.header}> List of People </h1>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'row',
    },
    leftDiv: {
        textAlign: 'center',
        flex: 0.7,
    },
    rightDiv: {
        flex: 0.3,
        textAlign: 'center',
        backgroundColor: 'violet',
    },
    header: {
        marginTop: '30px',
        color: 'purple',
    },
};

export default PeopleProfile;
