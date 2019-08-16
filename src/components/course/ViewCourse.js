import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getCourse } from "../../actions/courseActions"
import CourseBreadcrumb from '../Layout/Breadcrumb';
import CourseTabs from './coursesTabedNav';
import { Link } from 'react-router-dom'
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
                <div className="jumbotron mb-4 pt-0 mt-0 p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-xs-12 col-sm-12 col-md-12 p-3">
                        <h1 className="display-4 font-italic">{course.name}</h1>
                        <p className="lead my-3">{course.description}</p>
                        <Link className="btn btn-primary btn-lg float-right" to="/" role="button">Enroll Now</Link>
                    </div>
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
