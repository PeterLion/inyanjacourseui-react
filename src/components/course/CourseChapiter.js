import React from 'react';

const CourseChapiters = ({ chapiters }) => {
    return (
        <div id="accordion">
            {
                chapiters.map((chapiter, id) => (
                    <div key={id} class="card">
                        <div class="card-header" id={`heading${id}`}>
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                                    {chapiter.name}
                                </button>
                                <span data-toggle="collapse" data-target={`#collapse${id}`}><i class="fa fa-angle-down fa-lg"></i></span>
                            </h5>
                        </div>

                        <div id={`collapse${id}`} class="collapse" aria-labelledby={`heading${id}`} data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default CourseChapiters