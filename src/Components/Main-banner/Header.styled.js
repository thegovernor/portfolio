import styled from "styled-components"

export const Wrapper=styled.div`
width: 100%;
background-color: #14213d;
padding-bottom: 50px;

@media (max-width: 481px) {
    height: 890PX;
  }
`


export const Header=styled.div`
display: flex;
justify-content: space-between;
margin: auto;
padding-top: 50px;
margin-bottom: 50px;

@media (max-width: 541px) {
    flex-wrap: wrap;
  
  }
@media (max-width: 481px) {
    flex-wrap: wrap;
  }

`
export const Div1=styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: center;
color: #ffd166;
flex-wrap: wrap;
width: 330px;
flex-basis: auto;
font:600 20px "ivypresto-headline", serif;

@media (max-width: 541px) {
    padding-bottom: 20px;
  }
@media (max-width: 481px) {
    padding-bottom: 20px;
  }

`
export const Div2=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 330px;
height: 200px;
flex: 1;
flex-wrap: wrap;
flex-basis: auto;

`
export const Logo=styled.img`
height: 200px;
border-radius: 50%;
position: absolute;
`

export const Circle=styled.div`
align-items: center;
height: 220px;
width: 220px;
border-radius: 50%;
border: dashed 2px #ffd166;
position: absolute;
animation: small-spin 120s linear infinite;

    @keyframes small-spin {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(-360deg);
    }
}
`


export const Div3=styled.div`
display: flex;
width: 330px;
justify-content: center;
align-items: center;
color: #FAF7EB;
flex: 1;
flex-basis: auto;
flex-wrap: wrap;
font:100 20px "ivypresto-headline", serif;

@media (max-width: 541px) {
    padding-top: 50px;
  }
@media (max-width: 481px) {
    padding-top: 50px;
  }
`

export const Section=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const H1=styled.h1`
    font: 600 52px "ivypresto-headline", serif;
    line-height: 1.2727272727em;
    color: #FAF7EB;
    margin-bottom: 24px;
    text-align: center;
    max-width: 650px;
    margin: auto;
    margin-bottom: 20px;

    @media (max-width: 481px) {
        font: 600 32px "ivypresto-headline", serif;
      padding-left: 10px;
      padding-right: 10px;
    }
    `
    
    

export const Paragraph=styled.p`

    font:100 20px "ivypresto-headline", serif;
    color: #ffd166;
    font-size: 20px;
    line-height: 1.45em;
    margin-bottom: 24px;
    text-align: center;
    max-width: 550px;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 481px) {
        padding-left: 10px;
        padding-right: 10px;
  }
`

export const Button=styled.button`
padding: 10px 40px;
color: #14213d;
margin: 0 auto;
margin-top: 30px;
border-radius: 30px;
border-style: none;
font-size: x-large;
cursor: pointer;
transition: 500ms;


&:hover {
    background-color:#ffd166 ;
}
`




