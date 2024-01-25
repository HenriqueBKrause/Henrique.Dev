import styled from "styled-components";
import backgroundfolha from "../../assets/images/backgroundfolha.jpg";

export const SkillsStyled = styled.div`
  height: 75vh;
  width: 100%;
  background: url(${backgroundfolha}) no-repeat center center fixed;
  @media screen and (max-width: 1080px) {
    height: 35vh;
  }
`;

export const SkillsTransictionOne = styled.div``;

export const SkillIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 14rem 0;
  width: 100%;

  img {
    margin: 1rem;
  }

  @media screen and (max-width: 1080px) {
    align-items: center; /* Centralizar verticalmente */

    img {
      width: 65px;
    }
  }
`;

export const SkillsTransictionTwo = styled.div``;
