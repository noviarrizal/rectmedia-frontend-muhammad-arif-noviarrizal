import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
	return (
		<>
			<div className="App">
				<div className="mobile-container">
					<Home />
				</div>
			</div>
		</>
	);
}

export default App;
