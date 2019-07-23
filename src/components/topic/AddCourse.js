import React, { Component } from 'react'

import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { createCourse } from "../../actions/courseActions"

class AddCourse extends Component {
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
        const newCourse = {
            name: this.state.name,
            description: this.state.description
        }
        const { id } = this.props.match.params
        this.props.createCourse(id, newCourse, this.props.history)
    }
    render() {
        const { name, description } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" name="description" value={description} onChange={this.onChange}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success lg">Save Course</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddCourse.propTypes = {
    createCourse: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { createCourse })(AddCourse);
