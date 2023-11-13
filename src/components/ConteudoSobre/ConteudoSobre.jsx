import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './ConteudoSobre.scss'

import image5 from '../../img/image5.png';



export default function ConteudoSobre() {

    return (
        <>
            <Container>
                <section id='sobre' className="sobre">
                    <h3>SOBRE NÓS</h3>
                    <Row className="">
                        <Col sm={5} className="texto">
                              
                            <p> A Longest Wave Tech é a mais nova empresa de tecnologia que se preocupa com o que será do mundo amanhã. Nossas soluções se baseiam em tornar nosso meio um lugar melhor de se viver.</p>
                            <p> Sendo assim, temos como objetivo implementar um sistema de coleta seletiva inteligente que seja efetivo, ou seja, que contribua para a redução do tempo de coleta e para aumento da
                                conscientização sobre a reciclagem na cidade de São Paulo.</p>
                        </Col>
                        <Col md={{ span: 5, offset: 1 }} className="imagem">
                            <Image src={image5} alt="Img" fluid/>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}