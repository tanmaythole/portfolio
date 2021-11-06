import React, {useState} from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <div className={props.sidebar?"sidebar open":"sidebar"}>
            <div class="sidebar-menu">
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Services</Link>
                    </li>
                    <li>
                        <Link>Projects</Link>
                    </li>
                    <li>
                        <Link>Blogs</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
