import React, { useEffect, useState } from "react";
import { SingleTask } from "./components/Single_Task/singleTask";
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
			<h1>TO-DO Desk</h1>
			{backendData.map((item) => (
				<div key={item.id}>
					<SingleTask title={item.title} description={item.description} />
				</div>
			))}
		</>
	);
};
export default App;
