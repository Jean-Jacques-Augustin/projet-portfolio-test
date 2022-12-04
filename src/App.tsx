import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import CustomNavbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Exprerience from "./pages/Exprerience";


function App() {
	return (
		<div className="App">
			<CustomNavbar/>
			<Routes>
				<Route element={<MainPage/>} path={"/"}/>
				<Route element={<Contact/>} path={"/contact"}/>
				<Route element={<Exprerience/>} path={"/exp"}/>
			</Routes>
			<MainPage/>
		</div>
	);
}

export default App;
