import styled from "styled-components"

export const Container=styled.div`

background-color: #DBBD7F;
margin-top: 30px;
position: relative;
overflow: hidden;
padding-bottom: 50px;


@media (max-width: 769px) {
    padding-bottom: 50px;

}
`
export const Wrapper=styled.div`
position: relative;
left: 29%;
width: 68%;
margin-top: 70px;
display: flex;
flex-direction: column;



@media (max-width: 1024px) {
    margin-top: 20px;
    max-width: 650px;

}
@media (max-width: 769px) {

    width: 90%;
    left: 7%;
}
`
export const Title=styled.h2`

font: 600 54px "ivypresto-headline", serif;
color: #1d3557;
margin-bottom: 0;

@media (max-width: 769px) {
    text-align: center;
}

`

export const Paragraph=styled.p`
font: 100 24px "ivypresto-headline", serif;
position: relative;
color: #1d3557;

@media (max-width: 769px) {
    text-align: center;
}

`
export const Line=styled.div`
border-top: 1px solid #1d3557;


`
export const Titlecontainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

`
export const Article=styled.p`
display: flex;
justify-content: space-between;
font: 600 24px "ivypresto-headline", serif;
color: #1d3557;
cursor: pointer;
transition: 500ms;
&:hover{
    color:#FAF7EB ;
}

`
export const Button=styled.button`
font: 100 16px "ivypresto-headline", serif;
padding: 15px 30px;
border-radius: 40px;
border: none;
margin-top: 30px;
background-color: #1d3557;
color: #FAF7EB;
cursor: pointer;
transition: 500ms;



&:hover{
    background-color: #FAF7EB;
color: #1d3557; 


}

`