import styled from "styled-components";
import Trashcan from "../../assets/trashcan.svg";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function Habitos() {
	const [show, setShow] = useState(false);
	const { config } = useContext(AppContext);
	const [habitsList, setHabitsList] = useState(undefined);
	const navigate = useNavigate();
	const [showList, setShowList] = useState(false);
	let updatedShowList = false;

	function updateHabits() {
		axios
			.get(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
				config
			)
			.then((resp) => {
				setHabitsList(resp.data);
				if (resp.data.length > 0) setShowList(true);
			})
			.catch(() => {
				alert("Erro ao receber habitos");
				navigate("/");
			});
	}

	useEffect(() => {
		updateHabits();
	}, []);

	return (
		<>
			<HabitsContainer>
				<MyHabitsContainer>
					<MyHabits>
						<h1>Meus hábitos</h1>
						<button onClick={() => setShow(true)}>+</button>
					</MyHabits>
					<CreateHabit
						show={show}
						setShow={setShow}
						updateHabits={updateHabits}
					/>
					{showList ? (
						habitsList.map((habit) => {
							return (
								<Habit
									key={habit.id}
									title={habit.name}
									weekdays={habit.days}
									id={habit.id}
									updateHabits={updateHabits}
								/>
							);
						})
					) : (
						<Message>
							Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
							para começar a trackear!
						</Message>
					)}
				</MyHabitsContainer>
			</HabitsContainer>
		</>
	);
}

function Day({ name, selected, active, index }) {
	const [selectedState, setSelectedState] = useState(selected);
	const { createHabitDays, setCreateHabitDays } = useContext(AppContext);

	return (
		<WeekDay
			selected={selectedState}
			onClick={() => {
				if (active) {
					if (selectedState) {
						let updatedDays = [...createHabitDays];
						let i = updatedDays.indexOf(index);
						updatedDays.splice(i, 1);
						setCreateHabitDays(updatedDays);
						setSelectedState(false);
					} else {
						let updatedDays = [...createHabitDays, index];
						setCreateHabitDays(updatedDays);
						setSelectedState(true);
					}
				}
			}}
		>
			{name}
		</WeekDay>
	);
}

function Habit({ title, weekdays, id, updateHabits }) {
	const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
	const { config } = useContext(AppContext);

	return (
		<HabitContainer>
			<h1>{title}</h1>
			<DaysContainer>
				{weekDays.map((day, index) => {
					return (
						<Day
							key={index}
							name={day}
							selected={weekdays.includes(index)}
							active={false}
						/>
					);
				})}
			</DaysContainer>
			<button
				onClick={() => {
					if (confirm("Apagar habito?")) {
						axios
							.delete(
								`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
								config
							)
							.then(() => {
								updateHabits();
							});
					}
				}}
			>
				<img src={Trashcan} alt="trashcan" />
			</button>
		</HabitContainer>
	);
}

const DaysContainer = styled.div`
	display: flex;
`;

const HabitContainer = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 15px;

	h1 {
		margin-bottom: 8px;
		font-family: "Lexend Deca";
		font-size: 19.976px;
		line-height: 25px;

		color: #666666;
	}

	button {
		img {
			width: 15px;
			height: 15px;
		}
		position: absolute;
		right: 10px;
		top: 10px;
		border-radius: 5px;
		background-color: transparent;
		width: 20px;
		height: 20px;
	}

	button:hover {
		background-color: rgba(255, 50, 50, 0.8);
	}
`;

function CreateHabit({ show, setShow, updateHabits }) {
	const weekDay = ["D", "S", "T", "Q", "Q", "S", "S"];
	const [title, setTitle] = useState("");
	const { createHabitDays, loading, setLoading, config } =
		useContext(AppContext);

	function handleSubmit() {
		setLoading(true);
		axios
			.post(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
				{
					name: title,
					days: createHabitDays,
				},
				config
			)
			.then(() => {
				setLoading(false);
				setShow(false);
				updateHabits();
			})
			.catch((resp) => {
				alert("Erro");
				setLoading(false);
			});
	}

	return (
		<CreateHabitContainer show={show}>
			<HabitInputContainer>
				<input
					type="text"
					placeholder="Novo hábito"
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<DaysContainer>
					{weekDay.map((day, i) => {
						return <Day key={i} name={day} active={true} index={i} />;
					})}
				</DaysContainer>
			</HabitInputContainer>
			<ButtonContainer>
				<CancelButton disabled={loading} onClick={() => setShow(false)}>
					Cancelar
				</CancelButton>
				<SaveButton onClick={handleSubmit} disabled={loading} type="submit">
					{loading ? <ThreeDots color="#ffffff" /> : "Salvar"}
				</SaveButton>
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

	${({ active }) => (active ? `cursor: pointer;` : ``)}

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
		transition: 0.1 ease-out;
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
		color: rgb(255, 50, 50);
	}
	&:active {
		transition: 0.1 ease-out;
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

	display: ${({ show }) => (show ? `flex` : `none`)};
	flex-wrap: wrap;

	input {
		width: 291px;
		margin-bottom: 10px;
	}
`;

const MyHabitsContainer = styled.div`
	width: 400px;
	padding-right: 36px;
	padding-left: 36px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

const HabitsContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding-top: 90px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
