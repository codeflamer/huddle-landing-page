import React from 'react';
import styled from 'styled-components';

const Section5 = () => {
    return (
        <Container>
            <Content>
                <h2> Get early access today</h2>
                <p> It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
                <FormContainer>
                    <form>
                        <input type='text' placeholder='email@example.com'/>
                        <button type='submit'>Get Started For Free</button>
                    </form>
                </FormContainer>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding:10px 85px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    top:150px;
    @media(max-width:768px){
         padding:10px 30px;
         top:100px;
    }
`;
const Content = styled.div`
    max-width:850px;
    background:var(--emailBg);
    border-radius:10px;
    padding:10px 60px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media(max-width:768px){
         padding:10px 30px;
    }
    h2{
        font-size:25px;
        margin:0;
        margin-bottom:15px;
        margin-top:20px;
        @media(max-width:768px){
         font-size:20px;
         margin-bottom:5px;
         margin-top:10px;
         text-align:center;
        }
    } 
    p{
        text-align:center;
        line-height:20px;
        padding:0 40px;
        @media(max-width:768px){
            padding:10px 10px;
        }
    }
    }
`;

const FormContainer = styled.div`
    width:100%;
    form{
        display:flex;
        justify-content:space-between;
        margin-bottom:20px;
        margin-top:15px;
        align-items:center;
        // border:1px solid red;
        @media(max-width:768px){
            display:flex;
            flex-direction:column;
        }
        input{
            border:0;
            height:40px;
            border-radius:20px;
            outline:none;
            padding:10px 20px;
            width:70%;
             @media(max-width:768px){
            width:100%;
        }
        }
        button{
            background:var(--buttonBg);
            border:0;
            color:white;
            padding:0 20px;
            border-radius:20px;
            cursor:pointer;
            padding:13px 20px;
            margin-left:20px;
            @media(max-width:768px){
                margin-top:25px;
                width:100%;
                margin-left:0px;
            }
        }
    }
`;

export default Section5
