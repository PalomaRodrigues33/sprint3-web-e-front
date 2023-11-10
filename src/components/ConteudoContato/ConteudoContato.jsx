import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import image2 from '../../img/image2.png';

export default function ConteudoContato() {

    return (
        <>
            <Container>
                <section id='contato' className="contato">
                    <h3>FALE CONOSCO!</h3>
                    <Row>
                        <Col>
                            <p>Se quer conversar com nosso atendimento para tirar dúvidas sobre o conteúdo, fale com:</p>
                            <p>Atendimento Longest Wave Tech: </p>
                            <p>9XXXX-XXXX</p>
                        </Col>
                        <Col>
                            <div className="imagem">
                                <Image src={image2} alt="Contato" />
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}