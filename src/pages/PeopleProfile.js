import React, { useState } from 'react';
import useQueryFetch from '../hooks/useQueryFetch';
import { getAllPersons } from '../graphql/queries';
import PersonProfile from '../components/PersonProfile';

const imageURL =
'https://images-na.ssl-images-amazon.com/images/I/61z85f1XsgL._AC_SY500_.jpg';

const Personobj = {
    name: '',
    dob: new Date(), 
    imageURL: imageURL, 
    phoneno: '12345'
};

const PeopleProfile = () => {
    const [person,setPersonData] = useState(Personobj);
    const { peopleData, errors } = useQueryFetch(getAllPersons);
    console.log(peopleData)

    const getPeopleList = () => {
        if (!peopleData) {
            return <div> Fetching Data... </div>;
        } else {
            const data = peopleData.personCollection.items;
            console.log(data);
            return (
                <div style={styles.listDiv}>
                    <ul type="none">
                        {data.map((item) => (
                            <li style={styles.li} key={item.sys.id} >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.leftDiv}>
                <h1 style={styles.header}> Add/Edit People </h1>
                <PersonProfile Person = {person} />
            </div>
            <div style={styles.rightDiv}>
                <h1 style={styles.header}> List of People </h1>
                {getPeopleList()}
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
    listDiv: {
        textAlign: 'start',
    },
    li: {
        color: 'purple',
        fontSize: '20px',
        margin: '5px',
        cursor: 'pointer',
    },
};

export default PeopleProfile;
