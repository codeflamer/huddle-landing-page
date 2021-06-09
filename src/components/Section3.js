import React from 'react';
import styled from'styled-components';

const Section3 = () => {
    return (
        <Container>
            <Content>
                <ImgContainer>
                    <img src='../images/illustration-stay-productive.png' alt='productive'/>
                </ImgContainer>
                <TextContainer>
                    <h2>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.</p>
                    <span><a href='#'>See how Fylo works</a></span>
                </TextContainer>
            </Content>
        </Container>
    )
}

const Container = styled.section`
padding:10px 70px;
// border:1px solid red;
display:flex;
flex-direction:column;
// align-items:center;
@media(max-width:768px){
       padding:10px 15px;
    }
`;
const Content = styled.div`
// border:1px solid blue;
display:flex;
justify-content:space-between;
align-items:center;
margin:50px 0;
@media(max-width:768px){
       flex-direction:column;
    }
`;
const ImgContainer = styled.div`
margin-right:25px;
img{
    width:100%;
}
`;
const TextContainer = styled.div`
    max-width:500px;
    h2{
        font-family:'Open Sans', sans-serif;
        font-weight:700;
        font-size:32px;
        max-width:300px;
     @media(max-width:768px){
       font-size:19px;
       max-width:100%;
    }
    }
    p{
        line-height:24px;
    }
    a{
        color:var(--buttonBg);
        text-decoration:underline;
        transition:0.2s;
        &:hover{
            color:var(--textColor);
            text-decoratiom:underline;
        }
    }
     @media(max-width:768px){
       margin-top:35px;
     }
`;

export default Section3
