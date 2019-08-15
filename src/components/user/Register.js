import React, { Component } from 'react'
import { createUser } from "../../actions/userActions"
import PropTypes from 'prop-types'
import { connect } from "react-redux"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
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
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.props.createUser(newUser, this.props.history)
    }
    render() {
        const { name, email, password } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex">
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Register</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="inputUserame">Your name</label>
                                        <input type="text" name="name" id="inputUserame" value={name} onChange={this.onChange} className="form-control" placeholder="Username" required autoFocus />

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email address</label>
                                        <input type="email" name="email" id="inputEmail" value={email} onChange={this.onChange} className="form-control" placeholder="Email address" required />

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input type="password" name="password" id="inputPassword" value={password} onChange={this.onChange} className="form-control" placeholder="Password" required />

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
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

Register.propTypes = {
    createUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user
})

export default connect(mapStateToProps, { createUser })(Register);
