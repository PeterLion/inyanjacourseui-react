import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { logout } from "../../actions/userActions"

class Header extends Component {
    logout() {
        this.props.logout()
        window.location.href = "/"
    }
    render() {
        const { validToken, user } = this.props.user
        const userIsAuthenticated = (
            <ul className="navbar-nav">
                <li className="nav-item dropdown dropdown-menu-left">
                    <Link className="dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
        </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/account" className="dropdown-item">Profile</Link>
                        <Link to="/programs" className="dropdown-item">Programs</Link>
                        <Link to="/topics" className="dropdown-item">Topics</Link>
                        <Link to="/courses" className="dropdown-item">Courses</Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/logout" onClick={this.logout.bind(this)} className="dropdown-item">Logout</Link>
                    </div>
                </li>
                <li className="nav-item"><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
            </ul>
        )
        const userIsNotAuthenticated = (
            <ul className="navbar-nav">
                <li className="nav-item mr-3"><Link to="/about-us">About Us</Link></li>
                <li className="nav-item mr-3"><Link to="/login">Sign In</Link></li>
                <li className="nav-item"><Link to="/register">Sign Up</Link></li>
            </ul>
        )
        let headerLinks;
        if (validToken && user) {
            headerLinks = userIsAuthenticated
        } else {
            headerLinks = userIsNotAuthenticated
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">Inyanja Space</Link>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">InyaLearn <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">InyaServe</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">InyaRead</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 mr-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                        {headerLinks}

                    </div>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { logout })(Header);
