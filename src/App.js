import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cursor from "./components/cursor/Cursor";
import Landing from "./pages/Landing";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeaderBack from "./pages/HeaderBack";
import Slogan from "./components/main/Slogan";
import Mumo from "./components/main/Mumo";
import MovingLabel from "components/main/MovingLabel";
import JustCards from "pages/JustCards";
import QnA from "pages/QnA";
import Members from "pages/Members";
import Sponser from "pages/Sponser";
import Youtube from "pages/Youtube";
import Project from "pages/Project";

const App = () => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsReady(true);
		}, 3000);
	});

	return (
		<div className="MainContainer">
			{!isReady && <Landing />}
			{isReady && (
				<>
					<NavBar />
					<Header />
					<Slogan />
					<Mumo />
					<JustCards />
					<Members />
					<Project />
					<Youtube />
					<QnA />
					<Sponser />
					<Footer />
				</>
			)}
		</div>
	);
};

export default App;
