import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </nav>
                <div>{children}</div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
