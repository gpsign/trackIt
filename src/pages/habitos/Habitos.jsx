import styled from "styled-components";
import TrackIt from "../../assets/TrackIt.svg";
import Sponge from "../../assets/sponge.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

export default function Habitos() {
	return (
		<>
			<HabitsContainer>
				<Header>
					<HeaderContent>
						<img src={TrackIt} />
						<ProfilePic src={Sponge} />
					</HeaderContent>
				</Header>
				<MyHabitsContainer>
					<MyHabits>
						<h1>Meus hábitos</h1>
						<button>+</button>
					</MyHabits>
					<CreateHabit />
					<Message>
						Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
						começar a trackear!
					</Message>
				</MyHabitsContainer>
				<Footer>
					<FooterContent>
						<a>Hábitos</a>
						<ProgressBar>
							<CircularProgressbar
								minValue={0}
								maxValue={100}
								value={60}
								background={"true"}
								text={"Hoje"}
								backgroundPadding={6}
								styles={{
									path: {
										stroke: "#ffffff",
									},
									trail: {
										stroke: "#52B6FF",
									},
									// Customize the text
									text: {
										// Text color
										fill: "#FFFFFF",
										// Text size
										fontSize: "18px",
									},
									// Customize background - only used when the `background` prop is true
									background: {
										fill: "#52B6FF",
									},
								}}
							/>
						</ProgressBar>
						<a>Histórico</a>
					</FooterContent>
				</Footer>
			</HabitsContainer>
		</>
	);
}

function Day({ name }) {
	const [selected, setSelected] = useState(false);

	return (
		<WeekDay
			selected={selected}
			onClick={() => {
				if (selected) setSelected(false);
				else setSelected(true);
			}}
		>
			{name}
		</WeekDay>
	);
}

function CreateHabit() {
	const weekDay = ["D", "S", "T", "Q", "Q", "S", "S"];

	return (
		<CreateHabitContainer>
			<HabitInputContainer>
				<input type="text" placeholder="Novo hábito" />
				{weekDay.map((day) => {
					return <Day name={day} />;
				})}
			</HabitInputContainer>
			<ButtonContainer>
				<CancelButton>Cancelar</CancelButton>
				<SaveButton>Salvar</SaveButton>
			</ButtonContainer>
		</CreateHabitContainer>
	);
}

const HabitInputContainer = styled.div`
	width: 291px;
	height: fit-content;
	display: flex;
	flex-wrap: wrap;
`;

const WeekDay = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 4px;
	cursor: pointer;

	background: ${({ selected }) => (selected ? `#CFCFCF` : `#ffffff`)};
	border: 1px solid #d5d5d5;
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Lexend Deca";
	font-size: 19.976px;
	line-height: 25px;
	color: ${({ selected }) => (selected ? `#ffffff` : `#dbdbdb`)};

	transition: all 0.5s;
`;

const SaveButton = styled.div`
	user-select: none;
	width: 84px;
	height: 35px;
	background: #52b6ff;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 15.976px;
	line-height: 20px;
	color: #ffffff;
	transition: 0.5s;

	&:hover {
		background-color: limegreen;
		transition: 0.2s;
		cursor: pointer;
	}
	&:active {
		transform: translateY(1px);
		transition: 0.2 ease-out;
		filter: brightness(0.9);
	}
`;

const CancelButton = styled.button`
	width: 69px;
	height: 35px;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 15.976px;
	line-height: 20px;
	margin-right: 23px;

	color: #52b6ff;

	&:hover {
		color: red;
	}
	&:active {
		transform: translateY(1px);
		transition: 0.2 ease-out;
		filter: brightness(0.5);
	}
`;

const ButtonContainer = styled.div`
	position: absolute;
	bottom: 18px;
	right: 18px;
	display: flex;
`;

const CreateHabitContainer = styled.div`
	position: relative;
	width: 100%;
	height: 180px;
	background-color: #ffffff;
	border-radius: 5px;
	padding: 18px;
	margin-bottom: 30px;

	display: flex;
	flex-wrap: wrap;

	input {
		width: 291px;
		margin-bottom: 10px;
	}
`;

const ProgressBar = styled.div`
	width: 91px;
	position: absolute;
	left: 150px;
	top: -25px;
`;

const MyHabitsContainer = styled.div`
	width: 400px;
	padding: 36px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const HeaderContent = styled.div`
	width: 400px;
	padding: 36px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Message = styled.p`
	width: 1005;

	font-family: "Lexend Deca";

	font-size: 18px;
	line-height: 22px;
	text-align: center;

	color: #666666;
`;

const MyHabits = styled.div`
	display: flex;
	height: 35px;
	width: 100%;
	margin-bottom: 26px;

	justify-content: space-between;
	align-items: center;

	h1 {
		font-family: "Lexend Deca";
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
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

	display: flex;
	justify-content: center;
	align-items: center;

	background: #ffffff;
`;

const FooterContent = styled.div`
	position: relative;
	width: 400px;
	padding: 36px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		text-decoration: none;
		font-size: 18px;
	}
`;

const HabitsContainer = styled.div`
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
	justify-content: center;
	align-items: center;
`;

const ProfilePic = styled.img`
	width: 51px;
	border-radius: 100%;
`;
