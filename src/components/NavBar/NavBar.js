import React, {useState} from 'react';
import SideBar from '../SideBar/SideBar';
import './NavBar.css';
import { Link } from 'react-router-dom';
import BackDrop from "../BackDrop/BackDrop";
import {HiMenuAlt1} from 'react-icons/hi'

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div>
            <nav class="navbar">
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
                                <Link>Home</Link>
                            </li>
                            <li class="nav-link">
                                <Link>About</Link>
                            </li>
                            <li class="nav-link">
                                <Link>Services</Link>
                            </li>
                            <li class="nav-link">
                                <Link>Projects</Link>
                            </li>
                            <li class="nav-link">
                                <Link>Blogs</Link>
                            </li>
                            <li class="nav-link">
                                <Link>Contact</Link>
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
