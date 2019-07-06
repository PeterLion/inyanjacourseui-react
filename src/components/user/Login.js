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
        const { errors } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div><input className={classnames("", { "is-invalid": errors.emailError })} type="text" name="email" value={this.state.email} onChange={this.onChange} />
                        {errors.emailError && (
                            <div className="invalid-feedback">{errors.emailError}</div>
                        )}
                    </div>
                    <div><input type="password" name="password" value={this.state.password} onChange={this.onChange} /></div>
                    <div><input type="submit" value="Login" /></div>
                </form>
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
