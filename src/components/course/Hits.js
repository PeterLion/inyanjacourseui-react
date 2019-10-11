import React from 'react'


const Hits = () => {
    return (
        <div>
            <img src={props.hit.image} align="left" alt={props.hit.name} />
            <div className="hit-name">
                <Highlight attribute="name" hit={props.hit} />
            </div>
            <div className="hit-description">
                <Highlight attribute="description" hit={props.hit} />
            </div>
            <div className="hit-price">${props.hit.price}</div>
        </div>
    )
}

export default Hits