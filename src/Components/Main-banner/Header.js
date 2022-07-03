import React from "react";
import {Wrapper,Header,Div1,Div2,Div3, Logo, Circle,Section,H1,Paragraph, Button,} from "./Header.styled";
import Ben from "../Images/sirzakariaben5.jpeg"
import {FaInstagramSquare,FaMedium,FaGithubSquare,FaLinkedin} from "react-icons/fa"
import { Link} from "react-scroll";

export default function Container(){

    return(<Wrapper className="background">
        <Header>
            <Div1><h2>Benaddi</h2></Div1>
            <Div2><Logo src={Ben}></Logo>
            <Circle></Circle>
            </Div2>
            <Div3>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sirzakariaben/"><FaInstagramSquare size="30px" color="#ffd166"/></a>
                <a target="_blank" rel="noreferrer" href="https://medium.com/@zakariabenaddi"><FaMedium size="30px" color="#ffd166"/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/thegovernor"><FaGithubSquare size="30px" color="#ffd166"/></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zakaria-ben-addi-64395961/"><FaLinkedin size="30px" color="#ffd166"/></a>
            </Div3>
        </Header>
        <Section>
            <H1>Designing through the night to bring wise ideas to light.</H1>
        <Paragraph>With your vision, my Front-end expertize, and a hefty amount of coffee, we can create a digital experience that is creative, beautiful, and memorable.</Paragraph>
        <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={2500}>
<Button>Let's Talk</Button></Link>
        </Section>
        </Wrapper>
    )
}