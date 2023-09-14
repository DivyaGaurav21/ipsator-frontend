import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import Logo from './Logo.svg';

const Navigation = () => {
    return (
        <nav className="bg-neutral-300 py-2 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={Logo} alt='logo_img' className='' />
                </div>

                <ul className="flex space-x-4 text-red-900">
                    <li>
                        <Link to="/" className="flex items-center">
                            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cohort" className="flex items-center">
                            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Cohort
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="flex items-center">
                            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="flex items-center">
                            <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

