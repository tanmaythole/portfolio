import React from 'react';
import './Testimonials.css';
import SectionHeading from '../SectionHeading';
import { TestimonialData } from '../../Data';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Testimonials = () => {
    return (
        <div className="testimonials" id="testimonials">
            <SectionHeading title="Testimonial" tagline="What Client Thinks" />
            <div className="container" id="testimonials-container" data-aos="zoom-in-up" data-aos-duration="600">
                
            <Carousel plugins={[
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button className="prev">&#10094;</button>,
                            arrowLeftDisabled: <button className="disabled prev">&#10094;</button>,
                            arrowRight: <button className="next">&#10095;</button>,
                            arrowRightDisabled: <button className="disabled next">&#10095;</button>,
                            addArrowClickHandler: true,
                        }
                    }
                    // 'arrows'
                ]}>
                {TestimonialData.map(e => {
                    return (
                        <div className="myslide">
                            <img className="client-img" src={`images/${e.image}`} alt="" />
                            <p className="client-msg">
                                "{e.message}"
                            </p>
                            <p className="client-info">{e.name}</p>
                        </div>
                    )
                })}
                </Carousel>

                {/* <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
                <a className="next" onclick={plusSlides(1)}>&#10095;</a> */}
            </div>
        </div>
    )
}

export default Testimonials
