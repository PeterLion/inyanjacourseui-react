import React, { Component } from 'react'
import { connect } from "react-redux"
import { login } from "../../actions/userActions"
import PropTypes from 'prop-types'
import classnames from "classnames"


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.user.validToken) {
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.validToken) {
            this.props.history.push("/dashboard")
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const loginRequest = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(loginRequest)
    }
    render() {
        const { errors, email, password } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email address</label>
                                        <input type="email" name="email" value={email} onChange={this.onChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input type="password" name="password" value={password} onChange={this.onChange} id="inputPassword" className="form-control" placeholder="Password" required />

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user
})



export default connect(mapStateToProps, { login })(Login);
