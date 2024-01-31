import { keyframes } from "styled-components";
import styled from "styled-components";
import backgroundOne from "../../assets/images/backgroundOne.png";
import backgroundfolha from "../../assets/images/backgroundfolha.jpg";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const HomeStyled = styled.div`
  background: url(${backgroundOne}) no-repeat center center fixed;
  background-size: cover;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row; /* Altera para layout de coluna por padrão */

  @media screen and (max-width: 1080px) {
    background: url(${backgroundfolha}) no-repeat center center fixed;
    flex-direction: column; /* Muda para layout de linha em telas maiores */
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const HomeLogoStyle = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza na vertical */
  padding: 20rem 6rem;

  @media screen and (max-width: 1080px) {
    padding: 0;
    margin-top: 30%;
  }
`;

export const HomeTextStyle = styled.div`
  display: flex;
  align-items: center;
  text-align: center; /* Centraliza na horizontal */
  padding: 20rem 1rem;
  flex-direction: column;

  h1 {
    padding: 0;
    color: #f5f5f5;
    font-size: 24px;
    line-height: 1.6;

    @media screen and (max-width: 1080px) {
      text-align: center;
      color: #000;
      font-size: 26px;
    }
  }
  span {
    font-size: 70px;

    color: #fff;
    cursor: pointer;
    animation: ${pulseAnimation} 2s infinite;

    &:hover {
      transform: scale(1.2);
    }
    @media screen and (max-width: 1080px) {
      color: #000;
    }
  }
`;

export const HomeIcons = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  a {
    margin: 1.5rem;
    margin-top: 4rem;
    color: #fff;

      &:hover {
        transform: scale(1.2);
      }

      @media screen and (max-width: 1080px) {
        color: #000;
      }
    }
  }
`;
