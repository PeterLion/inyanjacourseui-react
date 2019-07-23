import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { getTopic } from "../../actions/topicActions"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { getCourses } from "../../actions/courseActions"
import MessageItem from "../message/messageItem";


class Topic extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getTopic(id, this.props.history)
        this.props.getCourses()
    }
    render() {
        const { topic } = this.props
        const { courses } = this.props.course
        const { message } = this.props.message
        let messageComponent;
        if (message) {
            messageComponent = (<MessageItem />)
        }
        return (
            <div className="container">
                <div className="row m-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1 className="lead">{topic.name}</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                        <Link to={`/topics/${topic.id}/addCourse`} className="btn btn-primary lg"> Add Course</Link>
                    </div>
                </div>
                {messageComponent}
                <div className="row">
                    <p>Courses covered in this Topic</p>
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                courses.map(course => (
                                    <tr key={course.id}>
                                        <td>{course.name}</td>
                                        <td>{course.description}</td>
                                        <td><Link to={`/courses/${course.id}`} className="btn btn-primary">View</Link></td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
Topic.propTypes = {
    getTopic: PropTypes.func.isRequired,
    topic: PropTypes.object.isRequired,
    getCourses: PropTypes.func.isRequired
}
const mapStateToMap = state => ({
    topic: state.topic.topic,
    course: state.course,
    message: state.message.message
})

export default connect(mapStateToMap, { getTopic, getCourses })(Topic);
