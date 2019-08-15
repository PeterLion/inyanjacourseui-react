import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getCourse } from "../../actions/courseActions"
import CourseBreadcrumb from '../Layout/Breadcrumb';
class ViewCourse extends Component {
    componentDidMount() {
        const { course_id } = this.props.match.params
        this.props.getCourse(course_id, this.props.history)
    }
    render() {
        const { course } = this.props.course
        return (
            <div className="container content">
                <CourseBreadcrumb course={course} />
                <div className="jumbotron course-header m-0 p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">{course.name}</h1>
                        <p className="lead my-3">{course.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

ViewCourse.propTypes = {
    getCourse: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
})

export default connect(mapStateToProps, { getCourse })(ViewCourse);
