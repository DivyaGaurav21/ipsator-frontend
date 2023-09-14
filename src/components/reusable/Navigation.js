import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo.svg';
import { navContent } from '../../staticdata';

const Navigation = () => {
    return (
        <nav className="bg-neutral-300 py-2 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={Logo} alt='logo_img' className='' />
                </div>

                <ul className="flex space-x-6 text-red-900">
                    {
                        navContent.map(navItem => (
                            <li key={navItem.id}>
                                <Link to={navItem.link} className="flex items-center a_link">
                                    <FontAwesomeIcon icon={navItem.icon} className="mr-2" /> {navItem.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

