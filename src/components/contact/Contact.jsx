import React from "react";
import './Contact.css';
import ContactOption from "./ContactOption";
import {MdOutlineEmail, MdWhatsapp, } from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_142inx7', 'template_ghpbqe4', form.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption
            Icon={MdOutlineEmail}
            title="Email"
            subtitle="ggarciacardiel@gmail.com"
            cta="Send a message"
            action="mailto:ggarciacardiel@gmail.com"
          />
          <ContactOption
            Icon={MdWhatsapp}
            title="WhatsApp"
            subtitle="+34 620 77 82 77"
            cta="Text me"
            action="https://wa.me/34620778277?text=Hi%20Guille%21%20I%20saw%20your%20profile%20and%20wanted%20to%20talk%20to%20you."
          />
          <ContactOption
            Icon={BsLinkedin}
            title="LinkedIn"
            subtitle="Stay in touch"
            cta="Let's link up"
            action="https://www.linkedin.com/in/guilletheproductmanager/"
          />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" id="" rows="7" placeholder="Your message" required />
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>

      </div>
    </section>
  )
};

export default Contact;
