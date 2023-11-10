import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ConteudoColeta() {
    const [lixeirasInteligentes, setLixeirasInteligentes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/lixeirasInteligentes')
            .then((response) => response.json())
            .then((data) => setLixeirasInteligentes(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Container>
            <section id='coleta' className="coleta">
                <h3>PONTOS DE COLETA</h3>
                <div style={{ height: '500px', width: '100%' }}>
                    <MapContainer center={[-23.565503,-46.653205]} zoom={15}scrollWheelZoom={false} style={{ height: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {lixeirasInteligentes.map((bin) => (
                            <Marker
                                key={bin.id}
                                position={[bin.latitude, bin.longitude]}
                            >
                                <Popup>{bin.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </section>
        </Container>
    );
}
