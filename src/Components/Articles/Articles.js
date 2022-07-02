import React from "react";
import { Article, Button, Container,Line,Paragraph,Title,Titlecontainer,Wrapper } from "./Articles.styled";
import {BsFillArrowRightCircleFill} from "react-icons/bs"    


export default function Articles(){
return(
<Container>
<div className="articlesimg"></div>

<Wrapper>
<Title>Recent Articles</Title>
<Paragraph>I am passionate about writing and speaking about the work I do and what it has taught me. I tend to write about the design process, communication and collaboration, design systems, and web development.
</Paragraph>

<Titlecontainer>
<Line/>
    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zakariabenaddi/12-front-end-developer-responsibilities-8668bd23081d" className="title"><Article>12 Front End Developer responsibilities<BsFillArrowRightCircleFill className="iconbs"  /></Article></a>
<Line/>
    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zakariabenaddi/how-does-website-optimization-impact-seo-d8e5cbf70d59" className="title"><Article>How does Website Optimization impact SEO? <BsFillArrowRightCircleFill className="iconbs"/></Article></a>
<Line/>
    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zakariabenaddi/designing-for-people-with-accessibility-needs-5ec7b8fd121a" className="title"><Article>Designing For People With Accessibility Needs
<BsFillArrowRightCircleFill className="iconbs"/></Article></a>
<Line/>
    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zakariabenaddi/9-seo-tools-you-will-need-e3114c4254f8" className="title"><Article>9 SEO Tools You Will Need <BsFillArrowRightCircleFill className="iconbs"/></Article></a>
<Line/>
</Titlecontainer>
<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zakariabenaddi" className="click"><Button>SEE ALL ON MEDIUM</Button></a>
</Wrapper>


</Container>


)

}