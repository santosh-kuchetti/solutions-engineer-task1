import { useContext } from "react";
import "./App.css";
import Main from "./components/Main";
import ContextProvider, { UserContext } from "./context/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Thanksgiving from "./components/Thanksgiving";

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<Router>
					<Routes>
						<Route
							path="/"
							element={<Main />}
						/>
						<Route
							path="/thanksgiving"
							element={<Thanksgiving />}
						/>
					</Routes>
				</Router>
			</ContextProvider>
		</div>
	);
}

export default App;
