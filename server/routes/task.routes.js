const express = require("express");
const router = express.Router(); // not app , but a mini app, (middleware?)
const { getAllTasks, postNewTask } = require("../controllers/task.controller");

router.use(express.json());

router.get("/tasks", (req, res) => {
	getAllTasks(req, res);
});

router.post("/tasks", (req, res) => {
	postNewTask(req, res);
});

router.get("/tasks/:id", (req, res) => {
	res.send(`a task with id ${req.params.id}`);
});


router.put("/tasks/:id", (req, res) => {
	res.send(`to update a task with ${req.params.id}`);
});

router.delete("/tasks/:id", (req, res) => {
	res.send("to delete a task ");
});

router.delete("/tasks", (req, res) => {
	res.send("to delete all task ");
});

module.exports = router;
