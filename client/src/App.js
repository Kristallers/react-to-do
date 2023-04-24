import React, { useEffect, useState } from "react";
import { SingleTask } from "./components/Single_Task/singleTask";
import NewTask from "./components/Form/NewTask";
const App = () => {
	const [backendData, setBackendData] = useState([{}]);

	const handleNewTask = async (formData) => {
		try {
			await fetch("/tasks", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			// getData();
		} catch (error) {
			alert("you fucked up");
		}
	};

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
			<NewTask handleNewTask={handleNewTask} />
			{backendData.map((item) => (
				<div key={item.id}>
					<SingleTask
						id={item.id}
						title={item.title}
						description={item.description}
						tasks={backendData}
						setTasks={setBackendData}
					/>
				</div>
			))}
		</>
	);
};
export default App;
