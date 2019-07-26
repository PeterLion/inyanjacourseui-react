import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { getTopic } from "../../actions/topicActions"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import MessageItem from "../message/messageItem";


class Topic extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getTopic(id, this.props.history)
    }
    render() {
        const { topic } = this.props
        const { message } = this.props.message
        const { Courses } = topic
        let courses;
        if (Courses && Courses.length != 0) {
            courses = (
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
                            Courses && Courses.map(course => (
                                <tr key={course.id}>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                    <td><Link to={`/courses/${course.id}`} className="btn btn-primary">View</Link></td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            )
        } else {
            courses = (
                <div>
                    <p>No course found in this in {topic.name}</p> <br />
                </div>

            )
        }
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
                    <p className="col-sm-12 col-md-12 col-lg-12">Courses covered in this Topic</p>

                    {courses}
                </div>
            </div>
        )
    }
}
Topic.propTypes = {
    getTopic: PropTypes.func.isRequired,
    topic: PropTypes.object.isRequired
}
const mapStateToMap = state => ({
    topic: state.topic.topic,
    message: state.message.message
})

export default connect(mapStateToMap, { getTopic })(Topic);
