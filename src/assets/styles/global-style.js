import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

  * {
    padding: 0;
    margin: 0;
    font-family: 'Manrope', sans-serif;
   
  }

  body {
    padding: 2px;
    margin: 0px;
    
    height: 90%;
    width: 100%;
  }
`;

export default globalStyle;
