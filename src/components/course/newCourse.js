import React, { Component } from 'react'
import { Link } from "react-router-dom"
import icon from "../../images/project_icon.jpg"

const newCourse = ({ course }) => {
    return (
        <div className="course-card card col-sm-12 col-md-3 col-lg-3 p-1 ml-3 mb-2">
            <img src={icon} className="card-img-top" alt="..." />
            <div className="card-body p-0">
                <p className="card-text course-description p-1 mb-3 text-center">
                    {course.name}
                </p>
                <div className="container-fluid pb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        3(10.256)
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-8 col-md-8 col-lg-9 m-0">
                            <span>By:</span> <Link to="#">Eng. John Doe</Link>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 m-0 p-0">
                            <span>$15.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default newCourse;
