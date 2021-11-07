import React from 'react'

const SectionHeading = (props) => {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <p className="seek"></p>
            <p className="tagline">{props.tagline}</p>
        </div>
    )
}

export default SectionHeading
