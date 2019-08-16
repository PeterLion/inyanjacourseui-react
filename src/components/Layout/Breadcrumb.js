import React from 'react'
import { Link } from 'react-router-dom'
const CourseBreadcrumb = ({ course }) => {
    const { Topic } = course
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={`/${Topic && Topic.Program.id}/${Topic && Topic.Program.name}`}>{Topic && Topic.Program.name}</Link></li>
                <li className="breadcrumb-item"><Link to="">{Topic && Topic.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{course.name}</li>
            </ol>
        </nav>
    )
}

export default CourseBreadcrumb;