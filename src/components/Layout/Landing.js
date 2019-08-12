import React, { Component } from 'react'
import NewCourses from '../course/newCourses';
import Slide from './Slider';
import MultipleCourses from '../course/MultipleCourses';

class Landing extends Component {
    render() {
        const sliders = [{ name: "Peter" }, { name: "henry" }, { name: "Obi" }]
        return (
            <div className="container-fluid p-0">
                <section className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <Slide sliders={sliders} />
                        </div>
                    </div>
                </section>
                <section className="container-fluid m-0 p-0">
                    <h2>Most populor courses</h2>
                    <div className="container-fluid p-0 m-0">
                        <div className="row p-0 justify-content-center">
                            <NewCourses />
                        </div>
                    </div>
                </section>
                <section className="container-fluid m-0 p-0">
                    <h2>New Courses</h2>
                    <div className="container-fluid p-0 m-0">
                        <div className="row p-0 justify-content-center">
                            <NewCourses />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing;
