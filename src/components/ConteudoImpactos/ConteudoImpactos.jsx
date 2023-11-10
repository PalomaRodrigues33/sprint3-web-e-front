import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {BsGraphDownArrow as Reducao} from 'react-icons/bs';
import {BsTree as Recursos} from 'react-icons/bs';
import {BsClock as Praticidade} from 'react-icons/bs';

export default function ConteudoImpactos() {

    return (
        <>
            <Container>
                <section id='impactos' className="impactos">
                    <h3>IMPACTOS</h3>
                        <Col>
                            <p>A poluição do solo, da água e do ar, o aumento do volume de lixo nos aterros sanitários, a contaminação de alimentos e a proliferação de doenças são apenas alguns exemplos dos problemas causados pelo descarte inadequado de resíduos.</p>
                        </Col>
                        <Col>
                            <div className="texto">
                                <p>Para combater tais problemas, nossa coleta seletiva inteligente busca promover fatores como:</p>
                            </div>
                            <Row className="justify-content-evenly">
                            <Card style={{ width: '11rem' }} className="mb-3">
                                <Card.Body>
                                    <Reducao />
                                    <Card.Text>
                                        Diminuição da poluição do meio ambiente
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '11rem' }} className="mb-3">
                                <Card.Body>
                                    <Recursos />
                                    <Card.Text>
                                        Economia de recursos naturais
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '11rem' }} className="mb-3">
                                <Card.Body>
                                    <Praticidade />
                                    <Card.Text>
                                        Maior Praticidade
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '11rem' }} className="mb-3">
                                <Card.Body>
                                    <Reducao />
                                    <Card.Text>
                                        Redução da emissão de gases
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row>
                        </Col>
                </section>
            </Container>
        </>
    )
}