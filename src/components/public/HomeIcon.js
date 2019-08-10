import React from 'react';

function HomeIcon() {
    return (
        <section id="home-icons" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 text-center">
                        <i className="fa fa-cog fa-3x mb-2"></i>
                        <h3>Turning Gears</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                    </div>
                    <div className="col-md-4 mb-4 text-center">
                        <i className="fa fa-cloud fa-3x mb-2"></i>
                        <h3>Sending Data</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                    </div>
                    <div className="col-md-4 mb-4 text-center">
                        <i className="fa fa-cart-plus fa-3x mb-2"></i>
                        <h3>Making Money</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeIcon;