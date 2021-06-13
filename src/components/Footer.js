import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Logo>
                <img src='../images/logo.svg' alt='logo'/>
            </Logo>
            <Contents>
                <Content1>
                    <div>
                        <img src='../images/icon-location.svg' />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua
                    </p>
                </Content1>
                <Content2>
                    <li><img src='../images/icon-phone.svg' /> +1-543-123-4567</li>
                    <li><img src='../images/icon-email.svg' /> example@fylo.com </li>
                </Content2>
                <Content3>
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </Content3>
                <Content4>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </Content4>
                <Content5>
                    <span><i class="fab fa-facebook-f"></i></span>
                    <span><i class="fab fa-twitter"></i></span>
                    <span><i class="fab fa-instagram"></i></span>
                </Content5>
            </Contents>
        </Container>
    )
}

const Container = styled.section`
    background:var(--footerBg);
    padding:50px 70px;
    padding-top:200px;
    @media(max-width:1000px){
        padding:150px 30px;
        padding-bottom:40px;
    }
    
`;
const Logo = styled.div`
width:100%;
img{
    // width:100%;
}
`;
const Contents = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:30px;
    @media(max-width:1000px){
        flex-direction:column;
    }
`;
const Content1 = styled.div`
    display:flex;
    p{
        padding:0;
        margin:0;
        margin-left:20px;
        width:300px;
        line-height:20px;
        @media(max-width:1000px){
            width:100%;
        }
    }
  
`;
const Content2 = styled.div`
    list-style:none;
    li{
        :nth-child(2){
            margin-top:20px;
        }
        img{
            margin-right:20px;
        }
    }
      @media(max-width:1000px){
        margin-top:30px;
    }
`;
const Content3 = styled.div`
    list-style:none;
    li{
        margin-top:20px;
        :nth-child(1){
            margin-top:0px;
        }
        img{
            margin-right:20px;
        }
    }
    @media(max-width:1000px){
        margin-top:30px;
    }
`;
const Content4 = styled.div`
    list-style:none;
    li{
        margin-top:20px;
        :nth-child(1){
            margin-top:0px;
        }
        img{
            margin-right:20px;
        }
    }
    @media(max-width:1000px){
        margin-top:30px;
    }
`;
const Content5 = styled.div`
    list-style:none;
    span{
        border:1px solid white;
        margin-right:20px;
        padding:6px 10px;
        border-radius:100%;
        cursor:pointer;
    }
    @media(max-width:1000px){
        margin-top:30px;
    }
`;

export default Footer
