import React from 'react';
import { Link } from 'react-router-dom';

const PageLinks = () => {
    return (
        <>
            <Link
                to={{
                    pathname: '/ui',
                    data: { name: 'nish', msg: 'Hi people' },
                }}
            >
                Send data to route
            </Link>

            <Link to="/nested">Nested Routes</Link>

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
            <Link to="/calendar">Full Calendar with Date-Pickers</Link>
        </>
    );
};

export default PageLinks;
