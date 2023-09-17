import React, { useState, useEffect } from 'react';
import Input from './Input';
import { MapContainer, MapFrame } from './EstilosMapa';

export default function ConteudoColeta() {

    const [cep, setCep] = useState('');


    useEffect(() => {
        const storedCep = localStorage.getItem('cep');
        if (storedCep) {
            setCep(storedCep);
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('cep', cep);
    }, [cep]);

    return (
        <>
            <div className="grid-container">
                <section className="coleta">
                    <div className="texto">
                        <h3>PONTOS DE COLETA</h3>
                        <p>Nossa solução de reciclagem inteligente está disponível em diversos pontos de coleta na cidade de São Paulo.</p>
                        <p>Consulte seu CEP abaixo para encontrar o ponto de coleta mais próximo a você e contribua para um futuro mais sustentável!</p>
                        <Input
                            type="number"
                            id="cep"
                            placeholder="Digite o seu CEP aqui"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </div>
                    <div className="imagem">
                        <MapContainer>
                            <MapFrame
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14627.927526540192!2d-46.6481067!3d-23.5690942!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1694723977429!5m2!1spt-BR!2sbr"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Embed"
                            ></MapFrame>
                        </MapContainer>
                    </div>
                </section>
            </div>
        </>
    );
}
