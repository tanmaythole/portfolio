import React from 'react'
import "./Footer.css"
import { 
    AiFillFacebook,
    AiFillTwitterCircle,
    AiOutlineInstagram,
    AiFillLinkedin,
    AiFillGithub
 } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2021 Tanmay Thole | All Rights Reserved.</p>
            <p class="social-links">
                <a target="_blank" href="https://www.facebook.com/tanmaythole45"><AiFillFacebook /></a>
                <a target="_blank" href="https://www.twitter.com/tanmay_v_thole"><AiFillTwitterCircle /></a>
                <a target="_blank" href="https://www.instagram.com/tanmay_v_thole"><AiOutlineInstagram /></a>
                <a target="_blank" href="https://www.linkedin.com/in/tanmay-thole-b82978175/"><AiFillLinkedin /></a>
                <a target="_blank" href="https://github.com/tanmaythole"><AiFillGithub /></a>
            </p>
        </div>
    )
}

export default Footer
