import { useState } from "react"
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer"
import Button from "../components/Botao"
import Input from "../components/Input"

export default function Login() {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let users;
        let user;
        try {
            const response = await fetch("http://localhost:5000/usuarios");
            users = await response.json();

        } catch (error) {
            alert("Ocorreu um erro no processamento da sua solicitação!");
        }

        for (let x = 0; x < users.length; x++) {
            user = users[x];
            if (user.email == usuario.email && user.senha == usuario.senha) {
                alert("Login realizado com SUCESSO!")

                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);

                sessionStorage.setItem("token-user", tokenUser);
                sessionStorage.setItem("data-user", JSON.stringify(user));
                
                window.open('https://freeboard.io/board/S6JLUI', '_blank');
                navigate("/");
                return;
            }
        }

        alert("Login ou senha incorretos!")
        setUsuario({
            email: "",
            senha: ""
        });
    }

    return (
        <>
            <h1>Login</h1>

                <LoginContainer>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Para acessar a página é necessário realizar o login.</legend>
                            <div>
                                <label htmlFor="idEmail">Email:</label>
                                <Input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="idSenha">Senha:</label>
                                <Input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange} />
                            </div>
                            <Button>LOGIN</Button>
                        </fieldset>
                    </form>
            </LoginContainer >
        </>
    )
}
