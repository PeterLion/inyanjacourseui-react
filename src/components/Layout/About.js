import React, { Component } from 'react'
import { Link } from "react-router-dom"
import jane from "../../images/jane.jpg"
import jenny from "../../images/jenny.jpg"
import john from "../../images/john.jpg"
import jim from "../../images/jim.jpg"

class About extends Component {
    render() {
        return (
            <div>
                <div className="cover">
                    <div className="cover-text">
                        <h1>You probably haven&rsquo;t heard of us.</h1>
                        <p className="lead">We're that "cool" vegan uncle who doesn't have kids and somehow makes a living repairing antique polaroid cameras, while drinking a $38 bottle of artisanal cold-brew.</p>
                        <a href="#why-us" role="button" className="btn btn-danger btn-lg">Let's get started, I guess.</a>
                    </div>
                </div>

                <section className="testimonial">
                    <div className="container">
                        <blockquote>
                            &ldquo; I never realized how uncool I was before. Hipstrify.io lovingly crafted me into shape, complete with a skin-fade, fresh denim &amp; a moustache &mdash; not only were they late, but they were overbudget. Highly recommended! &rdquo;
                <cite>&mdash; A Happy Client</cite>
                        </blockquote>
                    </div>
                </section>

                <section id="why-us">
                    <h2>Why Hipstrify.io?</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3>Artisanal</h3>
                                <p>Squid synth Marfa, fashion axe readymade whatever four loko aesthetic tote bag tilde. Mustache try-hard skateboard blog, umami ugh gentrify chia trust fund whatever. Church-key leggings small batch Etsy, taxidermy VHS meggings deep v slow-carb 8-bit blog.</p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Readymade</h3>
                                <p>Squid synth Marfa, fashion axe readymade whatever four loko aesthetic tote bag tilde. Mustache try-hard skateboard blog, umami ugh gentrify chia trust fund whatever. Church-key leggings small batch Etsy, taxidermy VHS meggings deep v slow-carb 8-bit blog.</p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Small Batches</h3>
                                <p>Squid synth Marfa, fashion axe readymade whatever four loko aesthetic tote bag tilde. Mustache try-hard skateboard blog, umami ugh gentrify chia trust fund whatever. Church-key leggings small batch Etsy, taxidermy VHS meggings deep v slow-carb 8-bit blog.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="team">
                    <div className="container">
                        <h2>Meet our team</h2>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={jane} alt="Woman's face" className="img-circle" />
                                <h4>Jane Doe</h4>
                                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                            <div className="col-sm-3">
                                <img src={john} alt="Man's face" className="img-circle" />
                                <h4>John Doe</h4>
                                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                            <div className="col-sm-3">
                                <img src={jenny} alt="Woman's face" className="img-circle" />
                                <h4>Jenny Doe</h4>
                                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                            <div className="col-sm-3">
                                <img src={jim} alt="Man's face" className="img-circle" />
                                <h4>Jim Doe</h4>
                                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="signup">
                    <div className="container">
                        <h2>Get our handcrafted newsletter</h2>
                        <p className="lead mt-2">Seriously, we'll send you real paper in the mail. We don't do email.</p>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control input-lg" placeholder="Put your real address in here..." />
                                        <span className="input-group-btn">
                                            <button className="btn btn-warning btn-lg" type="button">Handcraft it</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    crafted with &hearts; in calgary by <a href="http://bradhussey.ca">brad</a>
                </footer>
            </div>
        )
    }
}


export default About;
