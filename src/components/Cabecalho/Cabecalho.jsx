import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../img/lwtlogo_1.png'

export default function Cabecalho() {

    return (
        <>
            <header>
                <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                                alt="Longest Wave Tech logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/#sobre">Sobre</Nav.Link>
                                <Nav.Link href="/#impactos">Impactos</Nav.Link>
                                <Nav.Link href="/#funcionamento">Como Funciona</Nav.Link>
                                <Nav.Link href="/#coleta">Pontos de Coleta</Nav.Link>
                                <Nav.Link href="/#contato">Fale Conosco</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/login">Dados</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}