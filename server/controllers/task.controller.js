const TaskTable = require("../models/task.model");

const getAllTasks = async (req, res) => {
	try {
		//CRUD functions return promise , thats why i put try,catch to resolve it ..
		const allTasks = await TaskTable.findAll();
		res.send(allTasks);
		console.log(allTasks);
	} catch (error) {
		console.error(error);
	}
};

const postNewTask = async (req, res) => {
	const { title, description } = req.body;
	console.log("Received new task request:", title);
	try {
		const newTask = await TaskTable.create({ title, description });
		res.json(newTask.toJSON()); // when i added this line , TaskTable table got connected to pgadmin and i could see the table there !!!
		console.log("new task created : ", newTask);
		res.redirect("/tasks");
	} catch (error) {
		console.error(error);
	}
};
module.exports = { postNewTask, getAllTasks };
