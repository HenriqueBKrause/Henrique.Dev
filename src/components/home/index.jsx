import React, { useRef } from "react";
import { HomeStyled, HomeLogoStyle, HomeTextStyle, HomeIcons } from "./style";
import Logo from "../../assets/images/Logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "../about/index";

function Home() {
  const aboutSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="HomeContainer">
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
            <a href="https://github.com/HenriqueBKrause" target="_blank">
              <FaGithub size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-krause-4518771b0/"
              target="_blank"
            >
              <FaLinkedin size={50} />
            </a>
          </HomeIcons>
          <span onClick={scrollToNextSection} style={{ cursor: "pointer" }}>
            &#8964;
          </span>
        </HomeTextStyle>

        {/* Utilize uma div com um ref para criar o efeito de rolagem sem renderizar imediatamente o conteúdo */}
      </HomeStyled>
      <div ref={aboutSectionRef}></div>
    </div>
  );
}

export default Home;
