import React from 'react';

function Contact(){
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
                <form action="">
                    <input type="text" name="name" id="name" placeholder='Enter full name'  />
                    <input type="text" name="mail" id="mail" placeholder='Enter your e-mail' />
                    <input type="tel" name="telephone" id="telephone" placeholder='Enter your mobile number' />
                    <input type="submit" value="submit" className='submit-button' />
                </form>
            </div>
        </div>
        
        </>
    );
}
export default Contact;