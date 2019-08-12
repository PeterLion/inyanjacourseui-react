import React, { Component } from 'react'
import NewCourses from '../course/newCourses';
import Slide from './Slider';
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { getPublicCourses } from "../../actions/courseActions"
class Landing extends Component {
    componentDidMount() {
        this.props.getPublicCourses()
    }
    render() {
        const sliders = [{ name: "Peter" }, { name: "henry" }, { name: "Obi" }]
        const { public_courses } = this.props.course
        return (
            <div className="container-fluid p-0">
                <section className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <Slide sliders={public_courses} />
                        </div>
                    </div>
                </section>
                <section className="container pb-2 pt-2">
                    
                    <div className="container">
                    <h1 className="lead text-left">Most populor courses</h1>
                        <div className="row">
                            < NewCourses courses={public_courses} />
                        </div>
                    </div>
                </section>
                <section className="container pt-0">
                    
                    <div className="container">
                    <h1 className="lead text-left">New Courses</h1>
                        <div className="row">
                            <NewCourses courses={public_courses} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Landing.propTypes = {
    getPublicCourses: PropTypes.func.isRequired
}
const mapStateToState = state => ({
    course: state.course
})
export default connect(mapStateToState, { getPublicCourses })(Landing);
