import React from "react";
import {Container, Div3,Div4, Text, Wrapper,Text2, Paragraph,Wrapper2 } from "./Contact.styled";
import { ContactUs } from "./ContactUs";
import { ToastContainer } from 'react-toastify';

export default function Contact(){
    return(
    <section >
    
<Container id="contact">
<Div3 className="contactimg">
    <Wrapper>
        <div className="dev3">
            <Text>Let’s connect</Text>
        </div>
        <ContactUs/>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        
    </Wrapper>
    
</Div3>
    <Div4 className="contactimg2">
<Wrapper2>
    <Text2>Want to work together?</Text2>
    <Paragraph>I believe your website should celebrate what makes your business unique, connect you with new people who will love what you do, and foster stronger relationships with your existing customers. I’d love to hear about your project. </Paragraph>
</Wrapper2>
        
    </Div4>

    </Container>
    </section>
    )
}

