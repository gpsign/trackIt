import styled from "styled-components";
import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { loading, setLoading, setConfig, setImgURL } = useContext(AppContext);
	const navigate = useNavigate();

	function handleLogin(e) {
		e.preventDefault();
		setLoading(true);

		axios
			.post(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
				{
					email: email,
					password: password,
				}
			)
			.then((user) => {
				setLoading(false);
				navigate("/hoje");

				setConfig({
					headers: {
						Authorization: "Bearer " + user.data.token,
					},
				});

				setImgURL(user.data.image);
			})
			.catch(() => {
				setLoading(false);
				alert("Erro ao logar");
			});
	}

	return (
		<LoginContainer>
			<img src={Logo} alt="logo" />
			<form onSubmit={(e) => handleLogin(e)}>
				<input
					data-test="email-input"
					type="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					data-test="password-input"
					type="password"
					placeholder="Senha"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button disabled={loading} data-test="login-btn" type="submit">
					{loading ? <ThreeDots color="#ffffff" /> : "Entrar"}
				</button>
			</form>
			<StyledLink data-test="signup-link" to={"/cadastro"}>
				Não tem uma conta? Cadastre-se!
			</StyledLink>
		</LoginContainer>
	);
}

const StyledLink = styled(Link)`
	font-size: 13.976px;
	line-height: 17px;
	color: #52b6ff;
	text-decoration-line: underline;
	cursor: pointer;
	font-family: "Lexend Deca";
	transition: 0.5s;

	.link:hover {
		filter: brightness(1.2);
		transition: filter 0.5s;
	}
`;

const LoginContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;

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
