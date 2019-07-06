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
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div>
                        <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
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
