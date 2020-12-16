import React from 'react';
import {
    Link,
    Route,
    useParams,
    useRouteMatch,
    useLocation,
} from 'react-router-dom';

const Item = () => {
    const { name } = useParams();

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

const NestedRoutes = () => {
    const { url, path } = useRouteMatch();
    const location = useLocation();
    console.log(useRouteMatch());

    return (
        <div>
            <p> Getting Data from the Link of Prev Page</p>
            <p>Name: {location.state.name}</p>
            <p>Msg: {location.state.msg}</p>

            <ul>
                <li>
                    <Link to={`${url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${url}/boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${url}/footwear`}>Footwear</Link>
                </li>
            </ul>

            <Route path={`${path}/:name`}>
                <Item />
            </Route>
        </div>
    );
};

export default NestedRoutes;
