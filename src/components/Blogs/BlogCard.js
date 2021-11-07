import React from 'react';
import './Blogs.css'

const BlogCard = ({data}) => {
    return (
        <div className="blog" data-aos="zoom-in" data-aos-duration="400">
            <img src={`/images/${data.image}`} alt="" />
            <div className="blog-info">
                <h5 className="blog-title">
                    {data.title}
                </h5>
                <div className="blog-desc">
                    {data.description}
                </div>
                <a href={data.url} className="blog-btn">View Blog</a>
            </div>
        </div>
    )
}

export default BlogCard
