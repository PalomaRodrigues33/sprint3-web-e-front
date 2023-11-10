import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import image6 from '../../img/image6.png';

export default function ConteudoFuncionamento() {

    return (
        <>
            <Container>
                <section id='funcionamento' className="funcionamento">
                    <h3 className="text-center mb-4">COMO FUNCIONA?</h3>
                    <Row className="align-items-center">
                        <Col xs={12} md={5} className="mb-4 mb-md-0">
                            <Image src={image6} alt="Img" fluid />
                        </Col>
                        <Col xs={12} md={{ span: 5, offset: 1 }} className="texto">
                            <p className="mb-4">
                                As lixeiras inteligentes são conectadas a uma rede de sensores para monitorar seu nível de enchimento.
                                Isso permite que os serviços de limpeza sejam alertados quando a lixeira estiver cheia e precisar ser esvaziada.
                                Dessa forma, a coleta de lixo pode ser planejada com mais eficiência, economizando tempo e recursos.
                            </p>
                            <p>
                                Em resumo, utilizamos tecnologia para tornar o processo de descarte de lixo mais eficiente e higiênico,
                                como também reduzir o tempo e o esforço necessários para sua manutenção.
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}