import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --mainBg:hsl(218, 28%, 13%);
        --textColor:hsl(0, 0%, 100%);
        --testBg:hsl(219, 30%, 18%);
        --footerBg:hsl(216, 53%, 9%);
        --emailBg:hsl(217, 28%, 15%);
        --buttonBg:hsl(176, 68%, 64%);
    }
    *{
        box-sizing:border-box;
    }
  body {
    margin: 0;
    padding: 0;
    background: var(--mainBg);
    font-family: 'Open Sans', sans-serif;
    font-size:14px;
    color:var(--textColor);
    @media(max-width:768px){
      font-size:13px;
    }
  }
  a{
      color:var(--text-color);
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
  }
`;
 
export default GlobalStyle;