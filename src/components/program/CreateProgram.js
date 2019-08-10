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
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newProgram = {
            name: this.state.name,
            description: this.state.description
        }
        this.props.createProgram(newProgram, this.props.history)
    }
    render() {
        const { name, description } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sm-12 lg-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} /></div>
                            <div className="form-group">
                                <textarea name="description" className="form-control" value={description} onChange={this.onChange}></textarea></div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Create Program" /></div>
                        </form>
                    </div>
                </div>

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
