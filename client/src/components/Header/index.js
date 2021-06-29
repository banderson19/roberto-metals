import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-secondary flex-row">
            <div className="container flex-row justify-space-between float-left">
                <Link to="/">
                    <h1> Roberto Metals </h1>
                </Link>

                <nav className="float-right">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>

            
        </header>
    );
};

export default Header;