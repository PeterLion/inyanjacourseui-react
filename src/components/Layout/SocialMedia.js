import React, { Component } from 'react'

class SocialMedia extends Component {
    render() {
        return (
            <div className="container m-auto">
                <div className="row">
                    <div className="col-md-12 col-offset-2">
                        <div className="d-flex align-content-center">
                            <a className="fb-ic">
                                <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="pin-ic">
                                <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMedia;
