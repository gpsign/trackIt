import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import axios from "axios";
import { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("");

	const { loading, setLoading } = useContext(AppContext);
	const navigate = useNavigate();

	const sendUser = (e) => {
		e.preventDefault();
		setLoading(true);

		axios
			.post(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
				{
					email: email,
					name: name,
					image: photo,
					password: password,
				}
			)
			.then(() => {
				navigate("/");
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
				alert("Erro ao cadastrar usuário!");
			});
	};

	return (
		<SignUpContainer>
			<img src={Logo} alt="logo" />
			<form
				onSubmit={(e) => {
					sendUser(e);
				}}
			>
				<input
					type="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Senha"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Nome"
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input
					type="URL"
					placeholder="Foto"
					onChange={(e) => setPhoto(e.target.value)}
					required
				/>
				<button disabled={loading} type="submit">
					{loading ? <ThreeDots color="#ffffff" /> : "Cadastrar"}
				</button>
			</form>
			<StyledLink to={"/"}>Já tem uma conta? Faça login!</StyledLink>
		</SignUpContainer>
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

const SignUpContainer = styled.div`
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
