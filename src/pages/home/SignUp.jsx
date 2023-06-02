import styled from "styled-components";
import Logo from "../../assets/logo.svg";

export default function SignUp() {
	return (
		<SignUpContainer>
			<img src={Logo} alt="logo" />
			<form>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Senha" />
				<input type="text" placeholder="Nome" />
				<input type="URL" placeholder="Foto" />
				<button type="submit">Cadastrar</button>
			</form>
			<a>Já tem uma conta? Faça login!</a>
		</SignUpContainer>
	);
}

const SignUpContainer = styled.div`
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
