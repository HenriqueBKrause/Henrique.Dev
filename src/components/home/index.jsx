import React from "react";
import { HomeStyled, HomeLogoStyle, HomeTextStyle, HomeIcons } from "./style";
import Logo from "../../assets/images/Logo.png";
// import github from "../../assets/images/github.png";
// import linkedin from "../../assets/images/linkedin.png";
// Importe os ícones necessários
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <HomeStyled>
      <HomeLogoStyle>
        <a href="#">
          <img src={Logo} alt="Logo Home page" width="550px" />
        </a>
      </HomeLogoStyle>
      <HomeTextStyle>
        <h1>
          Olá, seja bem-vindo! <br />
          Me chamo Henrique Krause, sou desenvolvedor front-end e estudante.{" "}
          <br />
          Estou empolgado para compartilhar minhas experiências e habilidades
          com você, <br />
          criando soluções incríveis e explorando o mundo da programação.
        </h1>

        <HomeIcons>
          <a href="https://github.com/HenriqueBKrause">
            <FaGithub size={50} />
          </a>
          <a href="https://www.linkedin.com/in/henrique-krause-4518771b0/">
            <FaLinkedin size={50} />
          </a>
        </HomeIcons>
        <span>&#8964;</span>
      </HomeTextStyle>
    </HomeStyled>
  );
}

export default Home;
