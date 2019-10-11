import React, { useState } from 'react';
import Chapiter from './Chapiter';

const CourseChapiters = ({ chapiters }) => {

    return (
        <div id="accordion">
            {
                chapiters.map((chapiter, id) => (
                    <Chapiter key={id} chapiter={chapiter} id={id} />
                ))
            }


        </div>
    )
}

export default CourseChapiters