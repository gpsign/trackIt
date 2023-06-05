import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	body{
		background-color: #e5e5e5;
	}

	* {
		font-family: "Lexend Deca";
		box-sizing: border-box;
		user-select: none;
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
		filter: brightness(1.2);
		transition: filter 0.5s;
	}

	button:active{
		transform: translateY(1px);
		transition: 0.1s;
	}

	button:disabled{
		transform: none;
		cursor: default;
		filter: none;
	}
	
`;

export default GlobalStyle;
