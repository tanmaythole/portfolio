import React from 'react';
import SectionHeading from '../SectionHeading';
import './About.css'

const About = () => {
    return (
        <div class="about" id="about"  data-aos="fade-right">
            <div class="about-container">
                <SectionHeading title="About Me" />
                <article class="info1">
                    <p class="details">Hello, I am Tanmay Thole currently pursing my Engineering graduate degree in D. Y. Patil College of Engineering, Pune. I am Full Stack Web developer and data science enthusiast.
                        I individually works on designing & developing and creating new Web applications. I spend most of my day, experimenting with Python, PHP, HTML/CSS, JavaScript and
                        its endless frameworks.</p>
                    <p class="details">
                        I am strong in design and integration with intuitive problem-solving skills, passionate about
                        implementing and launching new projects, self-directed and energetic with superior performance in
                        both autonomous or collaborative environments working independently and collaborating with others on
                        group projects.
                    </p>
                    <p class="resume"><a target="_blank" href="files/resume.pdf" class="resume-btn">Download Resume &nbsp;<i class="fa fa-download"></i></a></p>
                </article>
            </div>
        </div>
    )
}

export default About
