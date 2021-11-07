import React from 'react'
import './Services.css'

const ServiceBox = ({props}) => {
    return (
        <div className="column" data-aos="fade-up" data-aos-duration="200">
            <div className="services-img">
                <img src={`/images/${props.image}`} alt="" />
            </div>
            <div className="service-info">
                <h3>{props.title}</h3>
                <p className="desc">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceBox
