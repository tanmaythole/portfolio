import React from 'react';
import './SideBar.css'
import { Link as ScrollLink } from 'react-scroll';

const SideBar = (props) => {
    const onclick = () => {
        props.setSidebar(!props.sidebar);
    }
    return (
        <div className={props.sidebar?"sidebar open":"sidebar"}>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <ScrollLink onClick={onclick} to="header">Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink onClick={onclick} to="about" spy={true} smooth={true} offset={-120}>About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink onClick={onclick} to="services" spy={true} smooth={true} offset={-40}>Services</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink onClick={onclick} to="projects" spy={true} smooth={true} offset={-40}>Projects</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink onClick={onclick} to="blogs" spy={true} smooth={true} offset={-40}>Blogs</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink onClick={onclick} to="contact" spy={true} smooth={true} offset={-40}>Contact</ScrollLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
