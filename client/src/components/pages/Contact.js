import React from 'react';
import '../../App.css';
import './Contact.css'

export default function Contact() {
  return (
    <>
    <h1 class='services'>Contact Us</h1>
    <div class='contact-container'>
      <div class="contact_msg">
          <p>If you have any questions or want to join us, please contact us with the following email:</p>
      </div>
      <div class="email_group">
          <div class="title_con">
            <img class="icon" src="/images/email.png"/>
          </div>
          <div>
            info@ixnforgood.com
          </div>
      </div>
    </div>
    </>
  );
}
