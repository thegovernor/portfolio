import styled from "styled-components"

export const Container=styled.div`
display: flex;
max-width: 100%;
@media (max-width: 1024px) {
    flex-direction: column;
  }

`

export const Div1=styled.div`
display: flex;
flex-direction: column;
flex: 1;
margin-top: 30px;
margin-right: 15px;
background-color: #1d3557;
overflow: hidden;
position: relative;
z-index: 1;
max-width: 100%;

@media (max-width: 1024px) {
  margin-right: 0px;
  padding-bottom: 30px;
  
  }
`

export const Wrapper=styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 1024px) {
  padding-left: 10px;
  padding-bottom: 30px;

  }


`
export const Div2=styled.div`
display: flex;
flex-direction: column;
flex: 1;

background-color: #DBBD7F;
margin-top: 30px;
margin-left: 15px;

@media (max-width: 1024px) {
  margin-left: 0px;
  }
`
export const Title=styled.h1`
color: #FAF7EB;
width: 400px;
font: 600 50px "ivypresto-headline", serif;
    line-height: 1.25em;
    padding-top: 40px;
    margin-bottom: 24px;
    position: relative;
    
    
    @media (max-width: 1024px) {
        margin-top: 30px;

  }
  @media (max-width: 769px) {
        margin-top: 30px;
  }

  @media (max-width: 580px) {
  text-align: center;
  left: 0%;
  display: flex;
    flex-direction: column;
  
  }

`
export const Text=styled.p`
color: #ffd166;
max-width: 400px;
font-size: 25px;
font: 100 20px "ivypresto-headline", serif;
position: relative;
display: flex;
flex-wrap: wrap;
@media (max-width: 1024px) {
text-align: center;
  }
  @media (max-width: 769px) {
        margin-top: 30px;
        padding-left: 0px;

  }
  @media (max-width: 580px) {
  left: 0%;
  padding-right: 20px;
  }


`
export const Text2=styled.h1`
color:#1d3557;
font: 600 50px "ivypresto-headline", serif;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;

@media (max-width: 1024px) {
    font: 600 42px "ivypresto-headline", serif;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`

export const Ul=styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
padding: 20px;
`

export const Li=styled.li`
display: flex;
flex-grow: 1;
width: 30%;
flex-direction: column;
align-items: center;
text-align: center;
font-size: 22px;
color: #1d3557;
height: 100px;

`
