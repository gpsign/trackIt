import styled from "styled-components";
import React from "react";
import Logo from "../../assets/logo.svg";

export default function Login() {
	return (
		<LoginContainer>
			<img src={Logo} alt="logo" />
			<form>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Senha" />
				<button type="submit">Entrar</button>
			</form>
			<a>Não tem uma conta? Cadastre-se!</a>
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	form {
		display: flex;
		flex-direction: column;
	}

	img {
		margin-bottom: 32px;
	}

	input {
		margin-bottom: 6px;
	}

	button {
		margin-bottom: 36px;
	}
`;
