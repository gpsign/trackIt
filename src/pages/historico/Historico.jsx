import styled from "styled-components";

export default function Historico() {
	return (
		<HistoricoContainer>
			<HistoricoContent>
				<h1>Histórico</h1>
				<Message>
					Em breve você poderá ver o histórico dos seus hábitos aqui!
				</Message>
			</HistoricoContent>
		</HistoricoContainer>
	);
}

const HistoricoContainer = styled.div`
	padding-top: 91px;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
`;

const HistoricoContent = styled.div`
	width: 400px;

	h1 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
		margin-bottom: 18px;
	}
`;

const Message = styled.p`
	width: 1005;

	font-family: "Lexend Deca";

	font-size: 18px;
	line-height: 22px;
	text-align: left;

	color: #666666;
`;
