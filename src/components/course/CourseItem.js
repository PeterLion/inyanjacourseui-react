import React from 'react'

function CourseItem({ course }) {
    return (
        <div className="col-sm-12 col-md-3 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{course.description}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;
