import React, { Component } from 'react'
import icon from "../../images/project_icon.jpg"
import { Link } from 'react-router-dom'
class ProgramCourses extends Component {
    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="course-card card col-sm-12 col-md-3 col-lg-3 p-1 ml-3 mb-2">
                        <img src={icon} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body mt-2 p-0">
                            <p className="card-text course-description p-1 mb-3 text-center">
                                Course.Name
                </p>
                            <div className="card-body m-0 p-0 text-center">
                                <p className="card-text"><span>By: </span><Link to="/">Eng. John Doe</Link></p>
                            </div>
                            <div className="card-body mt-2 p-0 text-center">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="card-link ml-2">4.2(250)</span>
                            </div>
                            <div className="card-body m-1 p-0 text-center">
                                <Link to="/" className="course-button card-link btn btn-primary">View Course</Link>
                                <span to="/" className="card-link">$15.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProgramCourses