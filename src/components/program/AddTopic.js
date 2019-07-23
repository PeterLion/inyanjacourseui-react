import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { createTopic } from "../../actions/topicActions"


class AddTopic extends Component {
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
        const newTopic = {
            name: this.state.name,
            description: this.state.description
        }
        const { id } = this.props.match.params
        this.props.createTopic(id, newTopic, this.props.history)
    }
    render() {
        const { name, description } = this.state
        return (
            <div className="container">
                <div className="row"></div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Topic name:</label>
                                <input type="text" name="name" value={name} onChange={this.onChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" value={description} onChange={this.onChange} className="form-control" row="5"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success lg">Save Topic</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddTopic.propType = {
    createTopic: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { createTopic })(AddTopic);
