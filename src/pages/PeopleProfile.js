import React from 'react';
import useQueryFetch from '../hooks/useQueryFetch';
import { getAllPersons } from '../graphql/queries';

const PeopleProfile = () => {
    const { peopleData, errors } = useQueryFetch(getAllPersons);

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
