import styled from "styled-components";
import TrackIt from "../../assets/TrackIt.svg";
import Sponge from "../../assets/sponge.svg";

export default function Habitos() {
	return (
		<>
			<HabitosContainer>
				<Header>
					<img src={TrackIt} />
					<ProfilePic src={Sponge} />
				</Header>
				<MyHabits>
					<h1>Meus hábitos</h1>
					<button>+</button>
				</MyHabits>
				<Message>
					Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
					começar a trackear!
				</Message>
				<Footer />
			</HabitosContainer>
		</>
	);
}

const Message = styled.p`
	width: 350px;

	font-family: "Lexend Deca";

	font-size: 18px;
	line-height: 22px;

	color: #666666;
`;

const MyHabits = styled.div`
	display: flex;
	height: 35px;
	width: 100%;
	margin-bottom: 26px;

	justify-content: center;
	align-items: center;

	h1 {
		font-family: "Lexend Deca";
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
		margin-right: 152px;
	}

	button {
		font-size: 32px;
		width: 40px;
		height: 35px;
		padding-bottom: 5px;
	}
`;

const Footer = styled.footer`
	width: 100%;
	height: 70px;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #FFFFFF;
`;

const HabitosContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding-top: 90px;

	display: flex;
	flex-direction: column;
	align-items: center;

    background-color: #e5e5e5;
`;

const Header = styled.header`
	width: 100%;
	height: 70px;
	position: fixed;
	top: 0;
	left: 0;
	background: #126ba5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const ProfilePic = styled.img`
	width: 51px;
	border-radius: 100%;
`;