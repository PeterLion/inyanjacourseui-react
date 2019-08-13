import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getCourse } from "../../actions/courseActions"
class ViewCourse extends Component {
    componentDidMount() {
        const { course_id } = this.props.match.params
        this.props.getCourse(course_id)
    }
    render() {
        const { course } = this.props.course
        return (
            <div className="container">
                <div class="jumbotron course-header mt-3 p-3 p-md-5 text-white rounded bg-dark">
                    <div class="col-md-6 px-0">
                        <h1 class="display-4 font-italic">{course.name}</h1>
                        <p class="lead my-3">{course.description}</p>
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
