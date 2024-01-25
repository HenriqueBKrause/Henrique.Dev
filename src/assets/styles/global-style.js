import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

  * {
    padding: 0;
    margin: 0;
    font-family: 'Manrope', sans-serif;
    
   
  }

  body {
    
    margin: 0px;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default globalStyle;
