import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";
import styled from "styled-components";
import Login from "./pages/home/Login";
import SignUp from "./pages/home/SignUp";
import Habitos from "./pages/habitos/Habitos";
import Hoje from "./pages/hoje/Hoje";
import TrackIt from "./assets/TrackIt.svg";
import Sponge from "./assets/sponge.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AppContext } from "./Context/AppContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Historico from "./pages/historico/Historico";

function App() {
	const [loading, setLoading] = useState(false);
	const [imgURL, setImgURL] = useState("");
	const [config, setConfig] = useState({});
	const [createHabitDays, setCreateHabitDays] = useState([]);
	const [totalHabits, setTotalHabits] = useState(0);
	const [doneCount, setDoneCount] = useState(0);
	const [percentage, setPercentage] = useState(0);

	return (
		<BrowserRouter>
			<Reset />
			<GlobalStyle />

			<Header>
				<HeaderContent data-test="header">
					<img src={TrackIt} />
					<ProfilePic data-test="avatar" src={imgURL} />
				</HeaderContent>
			</Header>

			<AppContext.Provider
				value={{
					loading,
					setLoading,
					config,
					setConfig,
					imgURL,
					setImgURL,
					createHabitDays,
					setCreateHabitDays,
					totalHabits,
					setTotalHabits,
					doneCount,
					setDoneCount,
					percentage,
					setPercentage,
				}}
			>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/cadastro" element={<SignUp />} />
					<Route path="/hoje" element={<Hoje />} />
					<Route path="/habitos" element={<Habitos />} />
					<Route path="/historico" element={<Historico />} />
				</Routes>
			</AppContext.Provider>

			<Footer>
				<FooterContent data-test="menu">
					<StyledLink data-test="habit-link" to={"/habitos"}>
						Hábitos
					</StyledLink>
					<ProgressBar>
						<Link data-test="today-link" to={"/hoje"}>
							<CircularProgressbar
								minValue={0}
								maxValue={totalHabits}
								value={doneCount}
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
									text: {
										fill: "#FFFFFF",
										fontSize: "18px",
									},
									background: {
										fill: "#52B6FF",
									},
								}}
							/>
						</Link>
					</ProgressBar>
					<StyledLink data-test="history-link" to={"/historico"}>
						Histórico
					</StyledLink>
				</FooterContent>
			</Footer>
		</BrowserRouter>
	);
}

const ProgressBar = styled.div`
	width: 91px;
	position: absolute;
	left: 150px;
	top: -25px;
`;

const HeaderContent = styled.div`
	width: 400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
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

export default App;
