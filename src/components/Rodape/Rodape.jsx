import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Rodape.scss'

export default function Rodape() {

    return (
        <>
            <footer className="text-center p-2">
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="mb-2 mb-md-0">
                            <p className="mb-0">Av. Lorem Ipsum, 1234 - Ipsum Lorem - IL</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p className="mb-0">(12)3456-7890</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}