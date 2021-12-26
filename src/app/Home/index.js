import React from 'react';
import { Link } from 'gatsby';

const Home = () => {
    return (
        <React.Fragment>
            <h1>Apps</h1>
            <ul>
                <li>
                    <Link to='/solitaire'>Solitaire</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Home;
