import React from 'react'
import { Link } from "react-router-dom"
import sliderImage from "../../images/new_pub_img/image1.jpg"
const Slider = ({ sliders }) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">

                {
                    sliders.map((slider, id) => {
                        if (id <= 3) {
                            return (id === 0 ?
                                <div key={id} className="carousel-item active">
                                    <img src={sliderImage} className="d-block" alt="..." />
                                    <div className="container">
                                        <div className="carousel-caption d-none d-sm-block mb-5">
                                            <h1 className="display-3">{slider.name}</h1>
                                            <p className="lead">
                                                {slider.description}
                                            </p>
                                            <Link to="#" className="btn btn-primary btn-lg">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div key={id} className="carousel-item">
                                    <img src={sliderImage} className="d-block" alt="..." />
                                    <div className="container">
                                        <div className="carousel-caption d-sm-block mb-5">
                                            <h1 className="display-3">{slider.name}</h1>
                                            <p className="lead">{slider.description}</p>
                                            <Link to={`/enroll/${slider.id}`} className="btn btn-primary btn-lg">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider;