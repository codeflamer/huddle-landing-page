import React from 'react';
import styled from 'styled-components';

const Section1 = () => {
    return (
        <Container>
            <Content>
                <Image><img src='../images/illustration-intro.png' alt='illustration-intro'/></Image>
                <TextContainer>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p> Fylo stores all your most important files in one secure location. 
                        Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <Button>Get Started</Button>
                </TextContainer>
            </Content>
        </Container>
    )
}

const Container = styled.section`
// border:1px solid red;
padding:10px 15px;
width:100%;
background:hsl(218deg 23% 15%);
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:650px;
    margin:0 auto;
    margin-bottom:110px;
    @media(max-width:768px){
        margin-bottom:-150px;
    }
`;
const Image = styled.div`
z-index:1;
    img{
        min-height:200px;
        width:100%;
        max-height:350px;
        // border:1px solid red;
    }
`;
const TextContainer = styled.div`
z-index:1;
    h1{
        font-family: 'Open Sans', sans-serif;
        font-weight:700;
        // border:1px solid red;
        font-size:30px;
        text-align:center;
        line-height:40px;
        @media(max-width:768px){
            font-size:22px;  
        }
    }
    p{
        width:450px;
        boder:1px solid blue;
        text-align:center;
        margin:0 auto;
        line-height:22px;
        @media(max-width:768px){
            width:100%;
        }
    }
   text-align:center;
`;
const Button = styled.button`
margin-top:24px;
padding:15px 80px;
background:var(--buttonBg);
color:var(--textColor);
border:0;
outline:0;
border-radius:50px;
&:hover{
    cursor:pointer;
}
`;

export default Section1
