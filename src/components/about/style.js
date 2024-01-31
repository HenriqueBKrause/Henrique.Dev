import styled from "styled-components";

export const AboutBodyStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 70vh;
  background: #000;
  background-size: cover;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px) {
    height: auto;
  }
`;

export const AboutTextStyle = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.6;

  h1 {
    color: #fff;
  }

  h3 {
    color: #fff;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
    text-align: left;
    align-items: flex-start;
  }
`;

export const ReadMoreButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem; /* Adicione um espaçamento acima do botão */
`;

export const AboutPicture = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 8;
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;
