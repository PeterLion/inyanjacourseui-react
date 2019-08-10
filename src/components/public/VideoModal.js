import React from 'react';
function VideoModal() {
    return (
        <div className="modal fade" id="videoModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <iframe src="" frameBorder="0" height="350" width="100%" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoModal;