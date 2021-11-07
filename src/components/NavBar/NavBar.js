import React, {useEffect, useState} from 'react';
import SideBar from '../SideBar/SideBar';
import './NavBar.css';
import { Link as ScrollLink } from 'react-scroll';
import BackDrop from "../BackDrop/BackDrop";
import {HiMenuAlt1} from 'react-icons/hi'

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [navbarClass, setNavbarClass] = useState("navbar");

    const handleNavbar =() => {
        if(window.pageYOffset > 100){
            setNavbarClass("navbar-fixed");
        } else {
            setNavbarClass("navbar");
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleNavbar);
    }, [])
    return (
        <div>
            <nav className={navbarClass}>
                <div class="nav-container">
                    <div class="nav-header">
                        <div class="logo">
                            <h1>Tanmay Thole</h1>
                        </div>
                        <button class="bars">
                            <HiMenuAlt1 onClick={()=>setSidebar(!sidebar)} />
                        </button>
                    </div>
                    <div class="nav-menu">
                        <ul>
                            <li class="nav-link">
                                <ScrollLink to="header">Home</ScrollLink>
                            </li>
                            <li class="nav-link">
                                <ScrollLink to="about" spy={true} smooth={true} offset={-120}>About</ScrollLink>
                            </li>
                            <li class="nav-link">
                                <ScrollLink to="services" spy={true} smooth={true} offset={-40}>Services</ScrollLink>
                            </li>
                            <li class="nav-link">
                                <ScrollLink to="projects" spy={true} smooth={true} offset={-40}>Projects</ScrollLink>
                            </li>
                            <li class="nav-link">
                                <ScrollLink to="blogs" spy={true} smooth={true} offset={-40}>Blogs</ScrollLink>
                            </li>
                            <li class="nav-link">
                                <ScrollLink to="contact" spy={true} smooth={true} offset={-40}>Contact</ScrollLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <SideBar sidebar={sidebar} />
            {sidebar?<BackDrop handleBackDrop={setSidebar} />:""}
        </div>
    )
}

export default NavBar
