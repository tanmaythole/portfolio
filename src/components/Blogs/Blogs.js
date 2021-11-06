import React from 'react'
import SectionHeading from '../SectionHeading'
import { BlogData } from '../../Data';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div className="blogs" id="blogs">
            <SectionHeading title="Blogs" tagline="What I Write" />
            <div class="container" id="blog-container">
                <div className="row">
                    {BlogData.map(e => {
                        return <BlogCard data={e} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blogs
