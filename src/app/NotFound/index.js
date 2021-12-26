import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <React.Fragment>
            <h1>Page Not Found</h1>
            <Link to='/'>Go back to home page.</Link>
        </React.Fragment>
    );
};

export default NotFound;
