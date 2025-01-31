import React from 'react'


const Navigation = () => {
    return (
        <header class="header_area">
            <div class="main_menu">
                <div class="search_input" id="search_input_box">
                    <div class="container">
                        <form class="d-flex justify-content-between" method="" action="">
                            <input type="text" class="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" class="btn"></button>
                            <span class="ti-close" id="close_search" title="Close Search"></span>
                        </form>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">

                        <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span> <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about-us.html">About</a>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="courses.html">Courses</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="course-details.html">Course Details</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="elements.html">Elements</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="blog.html">Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="single-blog.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link search" id="search">
                                        <i class="ti-search"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navigation;