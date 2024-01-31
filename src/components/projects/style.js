import styled from "styled-components";
import backgroundPreto from "../../assets/images/backgroundFolhaPreta.jpg";

export const ProjectsContainerStyle = styled.div`
  display: flex;
  heigth: auto;
  width: 100%;
  overflow-x: hidden;
  background: url(${backgroundPreto}) no-repeat center center fixed;
`;
export const TitleProjects = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  padding: 3rem 0;
  letter-spacing: 1px;
  margin-bottom: 50px;
  h1 {
    font-family: "Garamond";
  }
`;
