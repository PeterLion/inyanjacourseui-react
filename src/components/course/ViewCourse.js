import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getCourse } from "../../actions/courseActions"
import CourseBreadcrumb from '../Layout/Breadcrumb';
import CourseTabs from './coursesTabedNav';
import { Link } from 'react-router-dom'
import SearchCourse from './SearchCourse';
class ViewCourse extends Component {
    componentDidMount() {
        const { course_id } = this.props.match.params
        this.props.getCourse(course_id, this.props.history)
    }
    render() {
        const { course } = this.props.course
        return (
            <div className="container content pt-4">
                <CourseBreadcrumb course={course} />
                <div className="jumbotron">
                    <h1 className="display-4">{course.name}</h1>
                    <p>{course.description}</p>
                    <Link className="btn btn-primary btn-lg push-right align-right" to={`/enroll/${course.id}`} role="button">Enroll Now</Link>
                </div>
                <CourseTabs course={course} />
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
