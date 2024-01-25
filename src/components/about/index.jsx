import React, { useState } from "react";
import { AboutBodyStyled, AboutTextStyle, AboutPicture } from "./style";
import { Link } from "react-router-dom";
import henrique from "../../assets/images/henrique.png";

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(true);
  };

  return (
    <AboutBodyStyled>
      <AboutTextStyle>
        <h1>Sou Henrique Krause</h1>
        <h3>
          Desenvolvedor Front-End com ênfase em web, atuando também no
          desenvolvimento mobile. Estudante de Ciência da Computação na
          Universidade Federal de Pelotas (UFPel).
        </h3>
        {showFullText ? (
          <>
            <h3>
              Durante minha jornada acadêmica, tive a oportunidade de mergulhar
              profundamente no fascinante universo da tecnologia e programação.
              Aprendi e aprimorei meus conhecimentos em programação, algoritmos
              e computação de maneira abrangente.
            </h3>

            <h3>
              Como membro da Hut8 Ej, empresa júnior de computação da
              universidade, pude aplicar na prática os conhecimentos adquiridos
              em sala de aula. Trabalhei em projetos desafiadores e
              colaborativos, contribuindo para soluções inovadoras.
            </h3>
            <h3>
              Agora, estou pronto para levar minha paixão pela programação e
              resolução de problemas para a sua equipe. Com habilidades
              aprimoradas e uma abordagem rápida e eficaz, estou entusiasmado
              para enfrentar novos desafios e contribuir para o sucesso...
            </h3>
          </>
        ) : (
          <h3>
            Durante minha jornada acadêmica, tive a oportunidade de mergulhar
            profundamente no fascinante universo da tecnologia e programação.
            Aprendi e aprimorei meus conhecimentos em programação, algoritmos e
            computação de maneira abrangente.
            <h3>
              <Link onClick={handleReadMore}>
                {" "}
                <h3>Ler mais</h3>
              </Link>
            </h3>
          </h3>
        )}{" "}
      </AboutTextStyle>
      <AboutPicture>
        <img src={henrique} alt="Foto Dev" />
      </AboutPicture>
    </AboutBodyStyled>
  );
};

export default About;
