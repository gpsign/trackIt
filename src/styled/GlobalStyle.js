import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		font-family: "Lexend Deca";
		box-sizing: border-box;
	}

	a{
		font-size: 13.976px;
		line-height: 17px;
		color: #52b6ff;
		text-decoration-line: underline;
		cursor: pointer;
		font-family: "Lexend Deca";
	}

	input {
		width: 305px;
		height: 45px;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-size: 20px;
		line-height: 25px;
		color: black;
		padding-left: 8px;
	}
	input::placeholder {
		color: #dbdbdb;
	}

	button {
		border: none;
		width: 305px;
		height: 45px;

		display: flex;
		justify-content: center;
		align-items: center;

		background: #52b6ff;
		border-radius: 5px;

		color: white;

		cursor: pointer;
		transition: all 0.5s;
	
	}

	button:hover{
		filter: brightness(1.15);
		transition: all 0.5s;
	}
`;

export default GlobalStyle;
