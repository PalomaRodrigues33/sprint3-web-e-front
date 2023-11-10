import { Container, Row, Col} from 'react-bootstrap';
import Button from '../Botao';
import './ConteudoIntroducao.scss'

export default function ConteudoIntroducao() {
    const scrollToSobre = () => {
    const targetElement = document.getElementById('sobre');

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

    return (
        <>
            <section id='introducao' className="introducao">
                <Container className="p-md-5">
                    <Row className="text-center">
                        <Col>
                            <div className="texto-home">
                                <h4 className="mb-3">REDUZIR REUTILIZAR</h4>
                                <h1 className="mb-4">RECICLAR</h1>
                                <p className="mb-4">
                                    Bem-vindo ao nosso site de reciclagem inteligente! Aqui você encontrará informações valiosas
                                    sobre como podemos cuidar do nosso planeta através da reciclagem.
                                </p>
                                <Button onClick={scrollToSobre} className="text-white">
                                    Saiba Mais
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}