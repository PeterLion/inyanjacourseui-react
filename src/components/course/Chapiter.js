import React, { useState } from 'react'


const Chapiter = ({ chapiter, id }) => {
    const [chapiterOpen, setChapiterOpen] = useState(false)
    const [toggleArrow, setToggleArrow] = useState('fa-angle-down')
    const handleChapiterClick = (e) => {
        e.preventDefault()
        !chapiterOpen ? setToggleArrow('fa-angle-up') : setToggleArrow('fa-angle-down')
        setChapiterOpen(!chapiterOpen)
    }
    return (
        <div className="card">
            <div className="card-header chapitercollapse" onClick={handleChapiterClick} id={`heading${id}`}>
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded={chapiterOpen} aria-controls={`collapse${id}`}>
                        {chapiter.name}
                    </button>
                    <span data-toggle="collapse" data-target={`#collapse${id}`}><i id={`collapsebtn${id}`}
                        className={`fa ${toggleArrow} fa-lg`}></i></span>
                </h5>
            </div>

            <div id={`collapse${id}`} data-chapiter={id} className="collapse" aria-labelledby={`heading${id}`} data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        </div>
            </div>
        </div>
    )
}

export default Chapiter;