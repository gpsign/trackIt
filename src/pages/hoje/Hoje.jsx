import styled from "styled-components";
import Checkmark from "../../assets/checkmark.svg";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function Hoje() {
	const [todayHabits, setTodayHabits] = useState([]);
	let todayObj = dayjs();
	let day = "";

	switch (todayObj.$W) {
		case 0:
			day = "Domingo";
			break;
		case 1:
			day = "Segunda";
			break;
		case 2:
			day = "Terça";
			break;
		case 3:
			day = "Quarta";
			break;
		case 4:
			day = "Quinta";
			break;
		case 5:
			day = "Sexta";
			break;
		case 6:
			day = "Sábado";
			break;
	}

	function updateHabits() {
		axios
			.get(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
				config
			)
			.then((resp) => setTodayHabits(resp.data))
			.catch((resp) => alert("Erro"));
	}

	const { config } = useContext(AppContext);

	useEffect(() => {
		updateHabits();
	}, []);

	return (
		<HojeContainer>
			<HojeContent>
				<Today>
					<h1>
						{day}, {todayObj.$D}/{todayObj.$M + 1}
					</h1>
					<h2>
						<span className={"green"}>67% dos hábitos concluídos</span>
					</h2>
				</Today>
				{todayHabits.map((hab) => {
					return (
						<Habit
							key={hab.id}
							title={hab.name}
							done={hab.done}
							current={hab.currentSequence}
							highest={hab.highestSequence}
							id={hab.id}
							updateHabits={updateHabits}
						/>
					);
				})}
			</HojeContent>
		</HojeContainer>
	);
}

const HojeContainer = styled.div`
	padding-top: 98px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-right: 18px;
	padding-left: 18px;
`;

const HojeContent = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;

	.green {
		color: #8fc549;
	}
`;

const Today = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 28px;

	h1 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;

		color: #126ba5;
	}

	h2 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;

		color: #bababa;
	}
`;

function Habit({ title, done, current, highest, id, updateHabits }) {
	const { config } = useContext(AppContext);
	const [color, setColor] = useState("");

	return (
		<HabitContainer>
			<Description>
				<h1>{title}</h1>
				<p>
					Sequência atual: <span className={color}>{current} dias </span>
					<br />
					Seu recorde: <span className={color}> {highest} dias </span>
				</p>
			</Description>
			<Check
				onClick={() => {
					if (!done) {
						axios
							.post(
								`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
								{},
								config
							)
							.then(() => {
								updateHabits();
								if (current >= highest && current > 0) setColor("green");
								else setColor("");
							})
							.catch(() => alert("Erro"));
					} else
						axios
							.post(
								`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
								{},
								config
							)
							.then(() => updateHabits())
							.catch(() => alert("Erro"));
				}}
				checked={done}
			>
				<img src={Checkmark} />
			</Check>
		</HabitContainer>
	);
}

const HabitContainer = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 340px;
	height: 95px;
	padding-left: 15px;
	padding-right: 15px;
	margin-bottom: 10px;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;

		color: #666666;
	}

	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 12.976px;
		line-height: 16px;

		color: #666666;
	}
`;

const Check = styled.button`
	width: 70px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;

	background: ${({ checked }) => (checked ? `#8fc549` : `#EBEBEB`)};
	border-radius: 5px;

	&:hover {
		filter: brightness(0.85);
	}
`;
