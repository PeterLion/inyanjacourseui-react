import React from 'react';

const CourseChapiters = () => {
    return (
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Collapsible Group Item #1
                        </button>
                        <span  data-toggle="collapse" data-target="#collapseOne"><i class="fa fa-angle-down fa-lg"></i></span>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        </div>
                </div>
            </div>

        </div>
    )
}

export default CourseChapiters