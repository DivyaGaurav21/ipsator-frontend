import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ICON from './Logo.svg';

import {
    faHome,
    faEnvelope,
    faFileAlt,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-8 mt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Company Icon */}
                <div className="flex items-center mb-4 md:mb-0">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-4xl mr-2" />
                    <img src={ICON} alt="icona" />
                </div>

                {/* Navigation Links */}
                <nav className="md:ml-8 space-x-4 text-lg flex flex-col gap-5">
                    <a href="#" className="hover:text-gray-300">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Contact Us
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Copyright Policy
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Web Policies
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Privacy Policy
                    </a>
                </nav>

                {/* Social Media Icons */}
                <div className="mt-4 md:mt-0">
                    <span className="text-lg mr-4">Our Social Media Presence:</span>
                    <a
                        href="#"
                        className="text-gray-300 hover:text-gray-400 mr-2"
                        title="Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:text-gray-400 mr-2"
                        title="Twitter"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:text-gray-400 mr-2"
                        title="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="#"
                        className=" hover:text-gray-400"
                        title="YouTube"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
