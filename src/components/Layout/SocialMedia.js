import React, { Component } from 'react'

class SocialMedia extends Component {
    render() {
        return (
            <div className="container m-auto">
                <div class="row">
                    <div class="col-md-12 col-offset-2">
                        <div class="d-flex align-content-center">
                            <a class="fb-ic">
                                <i class="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="tw-ic">
                                <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="ins-ic">
                                <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="pin-ic">
                                <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMedia;
