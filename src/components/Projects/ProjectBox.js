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
            <div class="item">
                <img src={`/images/Project-${data.id}.png`} alt="" />
                <div class="text">
                    <h3>{data.title}</h3>
                    <p>MySQL project</p>
                </div>
                <div class="button1" onClick={handleModal}>View More</div>
            </div>
            {modal?<ProjectModal data={data} setModal={setModal} />:""}
            {modal?<BackDrop handleBackDrop={setModal} />:""}
        </div>
    )
}

export default ProjectBox
