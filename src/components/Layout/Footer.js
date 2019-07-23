import React, { Component } from 'react'
import SocialMedia from './SocialMedia';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small blue pt-4">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase">Inyanja Space</h5>
                                <p>Get informed. Express yourself. Get Served. Get options.</p>

                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3" />
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                        <SocialMedia />
                    </div>

                    <div className="footer-copyright text-center py-3">crafted with &hearts; in Rwanda by <a href="http://inyanja.com">Inyanja Space</a>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer
