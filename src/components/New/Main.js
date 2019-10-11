import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Nav';
import Sidemenu from './Sidemenu';

const Maindashboard = () => {
    return (
        <Fragment>
            <Sidemenu />
        </Fragment>
    )
}

export default Maindashboard