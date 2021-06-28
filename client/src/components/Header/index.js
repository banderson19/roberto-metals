import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-secondary flex-row align-center">
            <div className="container flex-row justify-space-between justify-center align-center">
                <Link to="/">
                    <h1> Roberto Metals </h1>
                </Link>

                <nav className="text-center">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>

            
        </header>
    );
};

export default Header;