import React from 'react';
import styled from 'styled-components';

const Section2 = () => {
    return (
        <Container>
            <Content>
                <Feature>
                    <ImgCont>
                        <img src='../images/icon-access-anywhere.svg' alt=''/>
                    </ImgCont>    
                    <h3>Access Your files anywhere</h3>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </Feature>
                <Feature>
                    <ImgCont>
                        <img src='../images/icon-security.svg' alt=''/>
                    </ImgCont>
                    <h3>Security you can trust</h3>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </Feature>
                <Feature>
                    <ImgCont>
                        <img src='../images/icon-collaboration.svg' alt=''/>
                    </ImgCont>
                    <h3> Real-time collaboration</h3>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </Feature>
                <Feature>
                    <ImgCont>
                        <img src='../images/icon-any-file.svg' alt=''/>
                    </ImgCont>
                    <h3>Store any type of file</h3>
                    <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </Feature>
            </Content>
        </Container>
    )
}

const Container = styled.section`
padding:10px 15px;
padding-top:60px;
display:flex;
flex-direction:column;
align-items:center;
`;
const Content = styled.div`
    // border:1px solid blue;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    max-width:750px;
    grid-gap:50px;
    @media(max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }
`;
const Feature = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;

h3{
    font-family: 'Open Sans', sans-serif;
    padding:0;
    margin:0;
    margin-top:10px;
}
p{
    text-align:center;
    // border:1px solid red;
    line-height:20px;  
}
@media(max-width:768px){
       margin:10px 0;
    }
`;

const ImgCont = styled.div`
// width:100%;
img{
    width:100%;
    height:90px;
}
`


export default Section2
