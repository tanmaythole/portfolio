import React from 'react'

const SectionHeading = (props) => {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <p class="seek"></p>
            <p class="tagline">{props.tagline}</p>
        </div>
    )
}

export default SectionHeading
