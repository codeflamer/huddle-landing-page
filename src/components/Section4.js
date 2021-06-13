import React from 'react';
import styled from'styled-components';

const Section4 = () => {
    return (
        <Container>
            <Content>
                <TestContainer>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <About>
                        <ImgContainer><img src='../images/profile-1.jpg' alt='dd'/></ImgContainer>
                        <TextContainer>
                            <h5>Satish Patel</h5>
                            <span> Founder & CEO, Huddle</span>
                        </TextContainer>
                    </About>
                </TestContainer>
                <TestContainer>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <About>
                        <ImgContainer><img src='../images/profile-2.jpg' alt=''/></ImgContainer>
                        <TextContainer>
                            <h5>Bruce McKenzie</h5>
                            <span> Founder & CEO, Huddle</span>
                        </TextContainer>
                    </About>
                </TestContainer>
                <TestContainer>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <About>
                        <ImgContainer><img src='../images/profile-3.jpg' alt=''/></ImgContainer>
                        <TextContainer>
                            <h5>Iva Boyd</h5>
                            <span>Founder & CEO, Huddle</span>
                        </TextContainer>
                    </About>
                </TestContainer>
            </Content>
        </Container>
    )
}

const Container = styled.section`
// border:1px solid red;
padding:10px 85px;
@media(max-width:900px){
    display:flex;
    flex-direction:column;
    padding:10px 30px;
    align-items:center;
}
`;
const Content = styled.div`
display:flex;
justify-content:space-between;
padding:60px 0;

@media(max-width:900px){
    flex-direction:column;
    font-size:12px;
}
`;
const TestContainer = styled.div`
// border:1px solid blue;
max-width:330px;
padding:20px;
margin-right:20px;
position:relative;
z-index:1;
&:nth-child(1){
    // border:1px solid red;
    &:before{
        content:'"';
        display:block;
        position:absolute;
        top:-35px;
        left:0;
        font-size:80px;
        color:var(--buttonBg);
        z-index:-1;
    }
}
p{
    line-height:20px;
}
background:var(--testBg);
@media(max-width:900px){
    margin-top:30px;
    margin-right:0;
}

`;
const About = styled.div`
display:flex;
align-items:center;
`;
const ImgContainer = styled.div`
margin-right:10px;
img{
    width:30px;
    height:30px;
    border-radius:100%;
}

`;
const TextContainer = styled.div`
    // border:1px solid green;
    h5{
        padding:0;
        margin:0;
        margin-bottom:2px;
    }
    span{
        font-size:9px;
    }
`;

export default Section4
