import React, { Component } from 'react'
import { connect } from "react-redux"
import { getPublicCourses } from "../../actions/courseActions"
import PropTypes from 'prop-types';
import CourseItem from './CourseItem';

class Courses extends Component {
    componentDidMount() {
        this.props.getPublicCourses()
    }
    render() {
        const { public_courses } = this.props.course
        return (
            <div className="container">
                <div className="row m-2"></div>
                <div className="row m-2">
                    {
                        public_courses.map(course => (
                            <CourseItem key={course.id} course={course} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

Courses.propTypes = {
    getPublicCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
})

export default connect(mapStateToProps, { getPublicCourses })(Courses);
