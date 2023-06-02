import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";
import Login from "./pages/home/Login";
import SignUp from "./pages/home/SignUp";
import Habitos from "./pages/habitos/Habitos";

function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />

			{/* <Login /> */}
			{/* <SignUp /> */}
			<Habitos />
		</>
	);
}

export default App;