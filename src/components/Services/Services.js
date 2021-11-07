import React from 'react'
import ServiceBox from './ServiceBox';
import './Services.css'
import SectionHeading from '../SectionHeading';
import { ServicesData } from '../../Data';

const Services = () => {
    return (
        <div className="services" id="services">
            <SectionHeading key="serviceHeading" title="Services" tagline="What Can I do" />
            <div className="container">
                {ServicesData.map(e => {
                    return <ServiceBox key={e.image} props={e} />
                })}
            </div>
        </div>
    )
}

export default Services
