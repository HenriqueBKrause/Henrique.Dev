import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  display: flex;
  z-index: 9999;
  position: fixed;
  border-bottom: 2px solid #fff;
`;

export const MiniLogoStyle = styled.div`
  display: flex;
  padding: 0 5rem;
  height: 100%;
  align-items: center;
`;

export const MenuContentStyled = styled.div`
  z-index: 4;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  display: none;
  height: 40px;

  ${({ theme }) => theme.desktop`
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: flex-end;
    
  `}
`;

export const MenuIconStyled = styled.img`
  padding: 0 4rem;
  cursor: pointer;
`;

export const MenuStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 30%;
  overflow: hidden;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;

  li {
    a {
      display: block;
      color: #fff;
      text-align: center;
      padding: 1rem 3rem;
      text-decoration: none;
      outline: none;
    }
  }

  li:hover {
    cursor: pointer;
    background-color: #242421;
  }

  ${({ theme }) => theme.desktop`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 4;
  background: ${({ theme }) => theme.primary};
  top: 4.3rem;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;

  li {
    width: 100%;
  }

  li:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.secondary};
    a {
      color: #fff;
    }
  }
`}
`;
