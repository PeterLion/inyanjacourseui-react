import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { createProgram } from "../../actions/programActions"


class CreateProgram extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            description: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const newProgram = {
            name: this.state.name,
            description: this.state.description
        }
        this.props.createProgram(newProgram, this.props.history)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div><input type="text" name="name" value={this.state.name} onChange={this.onChange} /></div>
                    <div><textarea name="description" value={this.state.description} onChange={this.onChange}></textarea></div>
                    <div><input type="submit" value="Create Program" /></div>
                </form>
            </div>
        )
    }
}

CreateProgram.propsTypes = {
    createProgram: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { createProgram })(CreateProgram);
