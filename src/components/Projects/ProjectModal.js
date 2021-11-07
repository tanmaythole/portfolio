import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import './Projects.css'

const ProjectModal = ({data, setModal}) => {
    return (
        <div>
            <div id="preview" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={()=>setModal(false)}>&times;</span>
                  <img id="img" src={`/images/Project-${data.id}.png`} alt={data.title} />
                  <div id="details">
                    <h3 id="title">{data.title}</h3>
                    <p id="info">{data.description}</p>
                    <div className="button" id="live">View</div>
                      <AiFillGithub />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
