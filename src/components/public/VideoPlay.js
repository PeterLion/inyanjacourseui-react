import React from 'react'

function VideoPlay() {
    return (
        <section id="video-play">
            <div className="dark-overlay">
                <div className="row">
                    <div className="col">
                        <div className="container p-5">
                            <a href="#" className="video" data-video="https://www.youtube.com/embed/HnwsG9a5riA" data-toggle="modal" data-target="#videoModal">
                                <i className="fa fa-play fa-3x"></i>
                            </a>
                            <h1>See What We Do</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoPlay;