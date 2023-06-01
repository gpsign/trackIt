import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		font-family: "Lexend Deca";
	}

	input {
		width: 303px;
		height: 45px;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-size: 20px;
		line-height: 25px;
		color: black;
	}
	input::placeholder {
		color: #dbdbdb;
	}

	button {
		border: none;
		width: 303px;
		height: 45px;

		display: flex;
		justify-content: center;
		align-items: center;

		background: #52b6ff;
		border-radius: 5px;
	}
`;

export default GlobalStyle;
