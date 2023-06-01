import logo from "../../assets/logo.svg";
import styled from "styled-components";
import React from "react";

export default function Home() {
	return (
		<HomeContainer>
			<img src={logo} alt="logo" />
			<form>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="senha" />
				<button type="submit">Entrar</button>
			</form>
			<Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

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

const Cadastro = styled.a`
	font-size: 13.976px;
	line-height: 17px;
	color: #52b6ff;
`;
