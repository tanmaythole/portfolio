import React from 'react';
import './BackDrop.css';

const BackDrop = (props) => {
    return (
        <div className="backdrop" onClick={() => props.handleBackDrop(false)}>
            
        </div>
    )
}

export default BackDrop
