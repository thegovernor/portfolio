import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button,Input } from './Contact.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    
    emailjs.sendForm('service_9co4636', 'template_o5xyknn', form.current, '74Rzfu4md5C642qF_')
      .then((result) => {
          console.log(result.text);
          toast.success('Your Email has been Sent!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

      }, (error) => {
          console.log(error.text);
          
      });
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
      
      <Input type="text" name="user_name" placeholder='Name' required="required" className='Name'/>
      
      <Input type="email" name="user_email" placeholder='Email' required="required" className='email' />
      
      <textarea name="message" required="required" placeholder='Message'className='message'/>
      <div>
      <Button type="submit" value="Send" >Email me</Button></div>
    </form>
    
  );
};
