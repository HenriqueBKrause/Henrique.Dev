import styled, { keyframes } from "styled-components";
import backgroundfolha from "../../assets/images/backgroundfolha.jpg";

export const SkillsStyled = styled.div`
  height: auto;
  width: 100%;
  overflow-x: hidden;
  background: url(${backgroundfolha}) no-repeat center center fixed;
  background-size: cover;
  @media screen and (max-width: 1080px) {
    height: 70%;
  }
`;

export const TextPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  h1 {
    font-family: "Garamond";
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 2rem; /* Ajustado o padding para dar mais espaço nas bordas */
  width: 100%;
  box-sizing: border-box; /* Garante que as dimensões incluam preenchimento e borda */

  img {
    margin: 1rem;
    width: 80px;
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 1080px) {
      width: 50px;
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const animationText1 = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

export const SkillsTransictionOne = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 100%;
  background: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

  .Text-Container {
    display: flex;
  }

  h1 {
    white-space: nowrap;
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
    padding: 5px;
    font-family: "Garamond";
  }

  #Text1 {
    animation: ${animationText1} 20s linear infinite;
    animation-delay: 0s;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 18px;
    }
  }
`;
