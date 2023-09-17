import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import HamburgerMenu from './assets/components/HamburgerMenu'
import MenuNav from './assets/components/MenuNav'
import Cabecalho from './assets/components/Cabecalho'
import ConteudoColeta from './assets/components/ConteudoColeta'
import ConteudoContato from './assets/components/ConteudoContato'
import ConteudoFuncionamento from './assets/components/ConteudoFuncionamento'
import ConteudoImpactos from './assets/components/ConteudoImpactos'
import ConteudoIndex from './assets/components/ConteudoIndex'
import ConteudoSobre from './assets/components/ConteudoSobre'
import Login from './assets/components/Login'
import Rodape from './assets/components/Rodape'

function App() {

    return (
        <>

            <Cabecalho />

            <BrowserRouter>
                <HamburgerMenu />
                <MenuNav />
                <Routes>
                    <Route path="/" element={<ConteudoIndex />} />
                    <Route path="/sobre" element={<ConteudoSobre />} />
                    <Route path="/contato" element={<ConteudoContato />} />
                    <Route path="/impactos" element={<ConteudoImpactos />} />
                    <Route path="/funcionamento" element={<ConteudoFuncionamento />} />
                    <Route path="/coleta" element={<ConteudoColeta />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
            <Rodape />

        </>
    )
}

export default App
