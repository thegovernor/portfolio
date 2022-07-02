import styled from "styled-components"



export const Container=styled.div`
display: flex;
margin-top: 30px;


@media (max-width: 1024px) {
    flex-direction: column;
  

}
@media (max-width: 769px) {
    margin-top: 0px;

}
`
// Section-1
export const Div3=styled.div`
display: flex;
flex: 1;
justify-content: center;
margin-right: 15px;

@media (max-width: 1024px) {
    margin-top: 30px;
    margin-right: 0px;
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 40px;
}


`
export const Text=styled.h2`
Font: 600 44px "ivypresto-headline", serif;
   
    margin-bottom: 24px;
    color: #FAF7EB;
    position: relative;
`

export const Wrapper=styled.div`
text-align: center;
width: 70%;

@media (max-width: 1024px) {
    width: 90%;
    padding-right:20px;
   
}
@media (max-width: 769px) {
    width: 80%;
}

@media (max-width: 375px) {
    padding-right:20px;
    width: 80%;
}
`

export const Input=styled.input`
display: flex;
flex-direction: column;
width: 100%;

`
export const Button=styled.button`
font: 100 16px "ivypresto-headline", serif;
padding: 15px 30px;
border-radius: 40px;
border: none;
margin-top: 20px;
background-color: #DBBD7F;
color: inherit;
cursor: pointer;
margin-bottom: 40px;
transition: 500ms;

&:hover{
    background-color: #FAF7EB;
color: #1d3557; 

}
`


// end of section 1


export const Div4=styled.div`
display: flex;
flex: 1;
margin-left: 15px;

@media (max-width: 1024px) {
    margin-left: 0px;
    background-color: #DBBD7F;
    
    margin-bottom: 15px;
    padding-bottom: 40px;
}


`

export const Wrapper2=styled.div`
padding-top: 10px;
padding-left: 70px;
padding-right: 70px;
max-width: 600px;
@media (max-width: 1024px) {
    max-width: none;
    
}

@media (max-width: 1024px) {
    padding-left: 40px;
padding-right: 40px;
}
@media (max-width: 769px) {
    padding-left: 20px;
padding-right: 20px;
}

`


export const Text2=styled.h2`
Font: 600 44px "ivypresto-headline", serif;
    line-height: 1.25em;
    margin-bottom: 24px;
    color: #1d3557;
    @media (max-width: 1024px) {
    text-align: center;
}

`
export const Paragraph=styled.p`
Font: 100 25px "ivypresto-headline", serif;
    line-height: 1.45em;
    color: #1d3557;
    @media (max-width: 1024px) {
    text-align: center;
}

`