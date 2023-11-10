import ConteudoColeta from "../components/ConteudoColeta/ConteudoColeta"
import ConteudoContato from "../components/ConteudoContato/ConteudoContato"
import ConteudoFuncionamento from "../components/ConteudoFuncionamento/ConteudoFuncionamento"
import ConteudoImpactos from "../components/ConteudoImpactos/ConteudoImpactos"
import ConteudoIntroducao from "../components/ConteudoIntroducao/ConteudoIntroducao"
import ConteudoSobre from "../components/ConteudoSobre/ConteudoSobre"

function Home() {

    return (
        <>
            <div>
                <ConteudoIntroducao/>
                <ConteudoSobre/>
                <ConteudoImpactos/>
                <ConteudoFuncionamento/>
                <ConteudoColeta/>
                <ConteudoContato/>
            </div>
        </>
    )
}

export default Home