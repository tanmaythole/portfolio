import React from 'react'
import './Services.css'

const ServiceBox = ({props}) => {
    return (
        <div class="column" data-aos="fade-up" data-aos-duration="200">
            <div class="services-img">
                <img src={props.image} alt="" />
            </div>
            <div class="service-info">
                <h3>{props.title}</h3>
                <p class="desc">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceBox
