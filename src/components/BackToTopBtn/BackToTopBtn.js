import React, {useState, useEffect} from 'react'
import './BackToTopBtn.css'
import {FaAngleDoubleUp} from 'react-icons/fa'

const BackToTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    const handleBtn = async () =>{
        const position = window.pageYOffset;

        if (position > 300) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top:0
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleBtn);
    }, [])
    
    return (
        showBtn?<div className="back-to-top">
            <button className="back-to-top-btn" onClick={handleClick}><FaAngleDoubleUp /></button>
        </div>:""
    )
}

export default BackToTopBtn
