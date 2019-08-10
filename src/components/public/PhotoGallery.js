import React from 'react';

function PhotoGallery() {
    return (
        <section id="gallery" className="py-5">
            <div className="container">
                <h1 className="text-center">Photo Gallery</h1>
                <p className="text-center">Check out our photos</p>
                <div className="row mb-4">
                    <div className="col-md-4">
                        <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
                            data-width="560">
                            <img src="https://source.unsplash.com/random/560x560" alt="" className="img-fluid" />
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="https://source.unsplash.com/random/561x561" data-toggle="lightbox" data-gallery="img-gallery" data-height="561"
                            data-width="561">
                            <img src="https://source.unsplash.com/random/561x561" alt="" className="img-fluid" />
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="https://source.unsplash.com/random/562x562" data-toggle="lightbox" data-gallery="img-gallery" data-height="562"
                            data-width="562">
                            <img src="https://source.unsplash.com/random/562x562" alt="" className="img-fluid" />
                        </a>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <a href="https://source.unsplash.com/random/563x563" data-toggle="lightbox" data-gallery="img-gallery" data-height="563"
                            data-width="563">
                            <img src="https://source.unsplash.com/random/563x563" alt="" className="img-fluid" />
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="https://source.unsplash.com/random/564x564" data-toggle="lightbox" data-gallery="img-gallery" data-height="564"
                            data-width="564">
                            <img src="https://source.unsplash.com/random/564x564" alt="" className="img-fluid" />
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="https://source.unsplash.com/random/565x565" data-toggle="lightbox" data-gallery="img-gallery" data-height="565"
                            data-width="565">
                            <img src="https://source.unsplash.com/random/565x565" alt="" className="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PhotoGallery;