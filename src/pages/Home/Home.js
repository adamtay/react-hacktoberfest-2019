import React from 'react';
import logo from './logo.svg';
import './Home.css';

function HomePage() {
    return (
        <div className="home">
            <header className="home-header">
                <img src={logo} className="home-logo" alt="logo" />
                <a
                    className="home-link"
                    href="http://localhost:3000/auckland"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Auckland
                </a>
            </header>
        </div>
    );
}

export default HomePage;
