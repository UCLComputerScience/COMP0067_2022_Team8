import React from 'react';
import '../../App.css';
import './contact.css'

export default function Contact() {
  return (
      <div>
        <div class="title_con">
            <h1 class="title">Contact us</h1>
            <img class="icon" src={require("../images/email.png")}/>
        </div>
        <div class="contact_msg">
            <p>If you have any questions or want to join us, please contact us with the following email:</p>
        </div>
        <div class="email_group">
            <div class="email_left">
                IXNforGood Contact Email:
            </div>
            <div class="email_right">
                ixnforgood.com
            </div>
           
  
        </div>
      </div>
  );
}
