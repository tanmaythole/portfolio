import React, { useState } from 'react'
import BackDrop from '../BackDrop/BackDrop';
import ProjectModal from './ProjectModal'
import './Projects.css'

const ProjectBox = ({data}) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    }
    return (
        <div>
            <div className="item">
                <img src={`/images/Project-${data.id}.png`} alt="" />
                <div className="text">
                    <h3>{data.title}</h3>
                    <p>MySQL project</p>
                </div>
                <div className="button1" onClick={handleModal}>View More</div>
            </div>
            {modal?<ProjectModal data={data} setModal={setModal} />:""}
            {modal?<BackDrop handleBackDrop={setModal} />:""}
        </div>
    )
}

export default ProjectBox
