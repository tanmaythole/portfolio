import React from 'react'
import './Header.css';
import Tanmay from '../../images/Tanmay.jpg'
import Typed from 'react-typed';
import {
    AiFillFacebook, 
    AiFillInstagram, 
    AiFillGithub, 
    AiFillLinkedin
} from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <div className="header">
            <div className="container" id="main-header">
                <div className="container-info" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                    <article className="info">
                        <p className="seek"></p>
                        <h1 className="name">I'm Tanmay</h1>
                        <p className="work">And I'm <span className="typed">
                            <Typed 
                                strings={[
                                    'Engineer', 
                                    'Web Developer', 
                                    'Competitive Programmer',
                                    'Full-Stack Enthusiast', 
                                    'Learner', 
                                    'Freelancer'
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop    
                            />
                        </span></p>
                        <ScrollLink to="contact" spy={true} smooth={true} offset={-50}><button className="hire">HIRE ME</button></ScrollLink> 
                        <p className="social-links">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tanmaythole45"><AiFillFacebook /></a> 
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tanmay_v_thole"><AiFillInstagram /></a> 
                            <a target="_blank" rel="noreferrer" href="https://github.com/tanmaythole"><AiFillGithub /></a> 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tanmay-thole-b82978175/"><AiFillLinkedin /></a> 
                        </p>
                    </article>
                    <article className="pic">
                        <img src={Tanmay} className="img" alt="Tanmay Thole" />
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Header
