import React, { Component } from 'react'
import NewCourses from '../course/newCourses';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="jumbotron">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <NewCourses />
                    <NewCourses />
                    <NewCourses />
                    <NewCourses />
                </div>
            </div>
        )
    }
}

export default Landing;
