import styled from "styled-components"

export const Container=styled.div`
background-color: #1d3557;
margin-top: 30px;
padding-bottom: 40px;
@media (max-width: 1024px) {
    height: 100%;
    padding-bottom: 40px;
  }

`
export const Title=styled.h1`
color: #FAF7EB;
font: 600 54px "ivypresto-headline", serif;
text-align: center;
padding-top: 100px;
margin: 0;
@media (max-width: 1024px) {
    padding-top: 70px;

  }

`
export const Div1=styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Paragraph=styled.p`
font: 100 24px "ivypresto-headline", serif;
color: #FAF7EB;
text-align: center;
width: 750px;

@media (max-width: 820px) {
    padding-left: 20px;
    padding-right: 20px;
  }
@media (max-width: 769px) {
    padding-left: 20px;
    padding-right: 20px;
  }

`
export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
`
export const Postcontainer=styled.div`
display: flex;
justify-content: center;
max-width: 800px;
height: auto;
margin: 30px;


`
export const Image=styled.img`
max-width: 100%;

`
export const Line=styled.div`
border: 0.1px solid #ffd166;
width: 400px;
margin-top: 40px;
margin-bottom: 40px;

`
