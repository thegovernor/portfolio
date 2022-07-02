import React from "react";
import {Container, Div1,Div2, Title,Text,Text2,Ul,Li, Wrapper} from "../Aboutme/Aboutme.styled"
import {SiJavascript,SiCss3,SiReact,SiWordpress,SiW3C,SiVisualstudiocode,SiSass} from "react-icons/si"
import {AiOutlineHtml5,AiFillGithub} from "react-icons/ai"
import {DiGitBranch} from "react-icons/di"
import {MdMobileFriendly} from "react-icons/md"
import {TbApi} from "react-icons/tb"




export default function Aboutme(){
    return(
    <Container className="flexcontainner">
    <Div1 >
        
        <div className="div1"></div>
        <Wrapper>
        <Title>Hi! I’m <span className="name"></span></Title>
        
        <Text>I’m a Front-End Developer located in Morocco. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</Text>
        <Text>Well-organised person, problem solver, independent employee with high attention to detail. Fan of Manga, Master of Laziness, TV series and philosophy.</Text>
        <Text>Interested in the entire frontend spectrum and working on ambitious projects with positive Humans and Aliens a like.</Text>
        </Wrapper>
    </Div1>

    <Div2>
        <div>
            <Text2 className="text2">Powers i Weild as a Wizard</Text2>
        </div>
        <div><Ul>
                    <Li><AiOutlineHtml5 size="50px"  className="space" />HTML 5</Li>
                    <Li><SiCss3 size="50px"  className="space"/>CSS3</Li>
                    <Li><SiJavascript size="50px"  className="space"/>JavaScript</Li>
                    <Li><SiReact size="50px" className="space" />React Js</Li>
                    <Li><DiGitBranch size="50px"  className="space" />Git</Li> 
                    <Li><AiFillGithub size="50px"  className="space" />Github</Li> 
                    <Li><SiWordpress size="50px"  className="space" />WordPress</Li> 
                    <Li><SiW3C size="50px"  className="space" />W3C</Li> 
                    <Li><MdMobileFriendly size="50px"  className="space" />Responsive Design</Li> 
                    <Li><SiVisualstudiocode size="50px"  className="space" />VS Code</Li> 
                    <Li><SiSass size="50px"  className="space" />Sass</Li> 
                    <Li><TbApi size="50px"  className="space" />Restful APIs</Li> 
                </Ul></div>
        
    </Div2>

    </Container>

    )
}
