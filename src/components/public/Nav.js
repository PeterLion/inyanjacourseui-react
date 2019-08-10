import React from 'react';
import { Link } from "react-router-dom"
function Nav() {
    return (<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <Link to="index.html" className="navbar-brand">Glozzom</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="index.html" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about.html" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="services.html" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact.html" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default Nav;