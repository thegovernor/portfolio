import React from "react";
import { Container, Paragraph, Title,Div1,Wrapper,Postcontainer, Image, Line } from "./Projects.styled";
import Img1 from "../Images/Home-new.webp"
import Img3 from "../Images/Frame.webp"



export default function Project(){
    return(

        <Container>
            <Title>Recent Projects</Title>
    <Div1>
        <Paragraph>I’ve designed and built apps, products, and websites for startups, Big-tech companies, and top agencies. Here’s a small selection of my latest work.
        </Paragraph>
    </Div1>
    <Wrapper>
        
        <Postcontainer> 
            <Image src={Img1} alt=""/>
    </Postcontainer>
    <Line/>

        <Postcontainer>
        <Image src={Img3} alt=""/>
        </Postcontainer>

    </Wrapper>

        </Container>
    )
}