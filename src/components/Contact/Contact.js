import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
    const initialFormData = {
        "name":"",
        "email":"",
        "subject":"",
        "message":""
    }
    const [formData, setFormData] = useState(initialFormData);

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });


    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:[e.target.value]});
    }


    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
            setFormData(initialFormData);
        }
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });

        axios({
            method: "post",
            url: "https://formspree.io/f/mgepdlnr",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thank you for your message. I will get back to you as soon as possible.");
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error);
            });
    }



    return (
        <div id="contact">
            <video id="video" autoPlay muted loop poster="/images/contact.png">
                <source src="/images/contact.mp4" type="video/mp4" />
            </video>
            <div className="contact-desc">
                <SectionHeading title="Get In Touch" />
                <p className="contact-tagline"><span>Let's create something together.</span> Simply complete the quick
                    contact form below and I'll reply (usually within a day) to discuss your requirements.</p>
                <p className="contact-tagline">I currently have good availability!</p>
            </div>


            <div className="form">
                {/* alert */}
                {serverState.status && <div className={`alert ${serverState.status.ok?"success":"error"}`}>
                    <strong>{serverState.status.ok?"Success!":"Error!"}</strong>&nbsp;{serverState.status.msg}
                </div>}
                
                <form onSubmit={handleOnSubmit} action="https://formspree.io/f/mgepdlnr" method="POST">
                    <input type="text" placeholder="Name" name="name" onChange={onchange} value={formData.name} />
                    <input type="email" placeholder="Email" name="email" onChange={onchange} value={formData.email} />
                    <input type="text" placeholder="Subject" name="subject" onChange={onchange} value={formData.subject} />
                    <textarea name="message" placeholder="Enter The Message...." onChange={onchange} value={formData.message}></textarea><br />
                    <button disabled={serverState.submitting} type="submit" className="btn" >Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
