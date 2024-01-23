import React, { memo, useState } from "react";
import menu from "../../assets/images/barra-de-menu.png";
import MiniLogo from "../../assets/images/MiniLogo.png";

import {
  HeaderStyle,
  MiniLogoStyle,
  MenuContentStyled,
  MenuStyled,
  MenuIconStyled,
} from "./style";

function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <HeaderStyle>
      <MiniLogoStyle>
        <a href="#">
          <img src={MiniLogo} alt="mini logo" width="60px" />
        </a>
      </MiniLogoStyle>

      <MenuContentStyled show={show}>
        <MenuIconStyled onClick={toggleMenu} src={menu} width="30px" />
      </MenuContentStyled>

      <MenuStyled show={show}>
        <li>
          <a href="#Inicio">Inicio</a>
        </li>
        <li>
          <a href="#Sobre">Sobre</a>
        </li>
        <li>
          <a href="#Habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#Projetos">Projetos</a>
        </li>
        <li>
          <a href="#Contatos">Contatos</a>
        </li>
      </MenuStyled>
    </HeaderStyle>
  );
}

export default memo(Header);
