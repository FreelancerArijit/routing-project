import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact(){

    const form = useRef();

    function sendMail(e){
        
        e.preventDefault();

        emailjs.sendForm('service_hn3omro', 'template_spu3wek', form.current, 'W9VyatDd1DntXDNPv').then(
  (response) => {
    alert('Message send!', response.status, response.text);
  },
  (error) => {
    alert('Something went wrong... try again later', error);
  },
);
    }

    return(
        <>
        <div className="contact-body">
            <div className="contact-info">
                <div>
                <h1>Get in touch:</h1>
                <h2>Fill the form to start a conversation</h2>
                </div>

                <div>
                <p><img src="./images/location2.png" alt="" className="contact-image" />Arambagh Hooghly West Bengal </p>
                <p><img src="./images/telephone.png" alt="" className="contact-image" />+91 7865095895</p>
                <p><img src="./images/mail.png" alt="" className="contact-image" />arijitchattopadhyay2004@gmail.com </p>
                </div>
            </div>
            <div className="contact-form">
                <form ref={form} id="myForm" onSubmit={sendMail}>
                    <input required type="text" name="name" id="name" placeholder='Enter full name'  />
                    <input required type="text" name="mail" id="mail" placeholder='Enter your e-mail' />
                    <input required type="tel" name="telephone" id="telephone" placeholder='Enter your mobile number' />
                    <input type="submit" value="submit" className='submit-button' />
                </form>
            </div>
        </div>
        
        </>
    );
}
export default Contact;