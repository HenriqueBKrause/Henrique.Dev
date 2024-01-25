import styled from "styled-components";
import { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
`;

export const AboutBodyStyled = styled.div`
  display: flex;
  height: 100vh; /* 100% da altura da tela */
  background: #000;
  background-size: cover;

  @media screen and (max-width: 1080px) {
    height: 70vh;
  }
`;

export const AboutTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 5rem;
  width: 60%;

  h1 {
    color: #fff;
  }
  h3 {
    color: #fff;
    margin: 1rem;
  }

  @media screen and (max-width: 1080px) {
    text-align: left;
  }
`;

export const AboutPicture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 1080px) {
    width: 80%;
  }
`;
