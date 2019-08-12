import React from 'react';
import { Link } from "react-router-dom"

function Slide({ sliders }) {
    return (
        <section id="showcase">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {
                        sliders.map(() => (
                            <div className="carousel-item carousel-image-2 active">
                                <div className="container">
                                    <div className="carousel-caption d-none d-sm-block mb-5">
                                        <h1 className="display-3">Heading Two</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                quod aliquid inventore vero perspiciatis.</p>
                                        <Link to="#" className="btn btn-primary btn-lg">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <Link to="#myCarousel" data-slide="prev" className="carousel-control-prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>

                <Link to="#myCarousel" data-slide="next" className="carousel-control-next">
                    <span className="carousel-control-next-icon"></span>
                </Link>
            </div>
        </section>
    )
}

export default Slide;