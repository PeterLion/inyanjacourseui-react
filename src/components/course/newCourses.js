import React, { Component, Fragment } from 'react'
import NewCourse from './newCourse';

const newCourses = ({ courses }) => {
    return (

        <Fragment>
            {
                courses && courses.map((course, id) => (
                    <NewCourse key={id} course={course} />
                ))
            }

        </Fragment>



    )
}



export default newCourses;
