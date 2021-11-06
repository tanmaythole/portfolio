import React, { useState } from 'react'
import ServiceBox from './ServiceBox';
import './Services.css'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'
import SectionHeading from '../SectionHeading';

const Services = () => {
    const [services, setServices] = useState([
        {
            "title":"Problem Solving",
            "description":"Want to make any problem look like a easy thing , then you're at right place. I practice on platforms like hackerrank, geeksforgeeks and apart from it I am 3 star coder at codechef.",
            "image":service1,
        },
        {
            "title":"Full Stack Developement",
            "description":"If you want website or web application or any complex project, then you're at right place. I am a full stack developer with skillset of PHP, MySQL, Python, etc. Apart from this currently I am into Django.",
            "image":service2,
        },
        {
            "title":"Web Designer",
            "description":"Have been into it since I started my engineering. I am a developer as well as designer. Apart from HTML,CSS,JS currently I am into React.",
            "image":service3,
        }
    ]);
    return (
        <div class="services" id="services">
            <SectionHeading title="Services" tagline="What Can I do" />
            <div class="container">
                {services.map(e => {
                    return <ServiceBox props={e} />
                })}
            </div>
        </div>
    )
}

export default Services
