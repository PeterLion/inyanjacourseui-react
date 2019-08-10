import React, { Fragment } from 'react'
import Nav from './Nav';
import Slide from './Slide';
import HomeIcon from './HomeIcon';
import HomeHead from './HomeHead';
import HomeInfo from './HomeInfo';
import VideoPlay from './VideoPlay';
import PhotoGallery from './PhotoGallery';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import VideoModal from './VideoModal';


function Main() {
    return (
        <Fragment>
            {
                //nav
                //<Nav />
            }

            {
                //<!-- SHOWCASE SLIDER -->
            }
            <Slide />
            {
                //<!--HOME ICON SECTION  -->
            }
            <HomeIcon />

            {
                //<!-- HOME HEADING SECTION -->
            }
            <HomeHead />

            {
                //<!-- INFO SECTION -->
            }
            <HomeInfo />

            {
                //<!-- VIDEO PLAY -->
            }
            <VideoPlay />

            {
                //<!-- PHOTO GALLERY -->
            }
            <PhotoGallery />
            {
                //<!-- NEWSLETTER -->
            }
            <NewsLetter />

            {//<!-- FOOTER -->
            }
            {
                //<Footer />
            }


            {
                //<!-- VIDEO MODAL -->
            }
            <VideoModal />
        </Fragment>

    )
}

export default Main;