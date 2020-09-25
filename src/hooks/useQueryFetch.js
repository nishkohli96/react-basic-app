import { useState, useEffect } from 'react';

const { REACT_APP_SPACE_ID, REACT_APP_CONTENT_API } = process.env;
const graphiqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`;

/* FYI : always prefix your custome hook name with the 'use' keyword; else React would 
   not be able to differentiate between a custom Hook and a normal function */
const useQueryFetch = (querystr) => {
    const [peopleData, setPeopleData] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        /* GraphQL queries will either return a 'data' object or an 'errors' object */
        window
            .fetch(graphiqlURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${REACT_APP_CONTENT_API}`,
                },
                body: JSON.stringify({ query: querystr }),
                /* Apparently, if I passed getAllPersons in stringify, it was throwing err */
            })
            .then((res) => res.json())
            .then(({ data, errors }) =>
                data ? setPeopleData(data) : setErrors(errors)
            );
    }, [querystr]);
    /* Passing querystr in dependency variables means, that the function will re-call itself
       when the value of the querystr changes */
    return { peopleData, errors };
};

export default useQueryFetch;
