import React, { Component, Fragment } from 'react'
import NewCourse from './newCourse';
import CoursesTabedNav from './coursesTabedNav';

class newCourses extends Component {
    render() {
        return (

            <Fragment>
                <NewCourse />
                <NewCourse />
                <NewCourse />
                <NewCourse />
                <NewCourse />
            </Fragment>



        )
    }
}

export default newCourses;
