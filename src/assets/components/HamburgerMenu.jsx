import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    position: relative;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.4s;
  }
`;

const MenuItems = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: rgba(240, 240, 240, 0.9);
  top: 40px;
  right: 0;
  width: 100%;
  text-align: center;
  padding: 20px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;

      a {
        color: rgba(82, 112, 112);
        text-decoration: none;
        font-size: 16px;
      }
    }
  }
`;

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HamburgerWrapper className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <MenuIcon className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </MenuIcon>
            <MenuItems className="menu-items" isOpen={isOpen}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Fale Conosco</Link></li>
                    <li><Link to="/impactos">Impactos</Link></li>
                    <li><Link to="/funcionamento">Como Funciona</Link></li>
                    <li><Link to="/coleta">Pontos de Coleta</Link></li>
                    <li><Link to="/login">Dados</Link></li>
                </ul>
            </MenuItems>
        </HamburgerWrapper>
    );
};

export default HamburgerMenu;
