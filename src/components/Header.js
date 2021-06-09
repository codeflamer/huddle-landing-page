import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Navigation>
            <Container>
                <Image>
                    <img src='../images/logo.svg' alt='Huddle-Logo'/>
                </Image>
                <TextContainer>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>SignIn</a></li>
                </TextContainer>
            </Container>
        </Navigation>
    )
}

const Navigation = styled.header`
// width:100%;
`
const Container = styled.nav`
    // border:1px solid red;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:35px 40px;
    
    @media(max-width:768px){
        padding:15px 15px;
    }
`
const Image = styled.div` 
    img{
        width:100%;
        @media(max-width:768px){
            width:80%;
        }
    }
    
`
const TextContainer = styled.div`
    display:flex;
    li{
        list-style:none;
        margin-right:30px;
    }
    @media(max-width:768px){
        li{
            list-style:none;
            margin-right:10px;
            &:nth-child(3){
                margin-right:0;
            }
        }
        
    }
`

export default Header
