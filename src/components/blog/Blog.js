import React, { Fragment } from 'react'
import PageHeader from './PageHeader';
import BlogContent from './BlogContent';
function Blog() {
    return (
        <Fragment>
            {
                //<!-- PAGE HEADER -->
            }
            <PageHeader />

            {
                //<!-- BLOG SECTION -->
            }
            <BlogContent />
        </Fragment>

    )
}

export default Blog;