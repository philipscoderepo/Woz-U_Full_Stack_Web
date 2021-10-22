import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({match}) => (
    <div>
        <h1>Favorite Things</h1>
        <ul>
            <li>
                <Link to={`${match.url}/car`}>Car</Link>
            </li>
            <li>
                <Link to={`${match.url}/food`}>Food</Link>
            </li>
            <li>
                <Link to={`${match.url}/movie`}>Movie</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:thingsID`} component={Things} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a thing.</h3>}
        />
    </div>
);

export default FavoriteThings;