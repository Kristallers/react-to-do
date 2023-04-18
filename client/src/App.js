import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
	const [backendData, setBackendData] = useState([{}]);

	useEffect(() => {
		fetch("/tasks")
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
			});
	}, []);
	return (
		<>
			<h1>Hello</h1>
			<p>{JSON.stringify(backendData)}</p>
		</>
	);
};
export default App;
