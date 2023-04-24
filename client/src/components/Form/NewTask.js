import { useState } from "react";

const NewTask = ({ handleNewTask }) => {
	const [formData, setFormData] = useState();
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		handleNewTask(formData);
	};

	return (
		<>
			<form onSubmit={handleSubmit} action="/api" method="post">
				<section>
					<label htmlFor="title">Enter task:</label>
					<input
						onChange={handleChange}
						type="text"
						id="title"
						placeholder="title"
						name="title"
					/>
				</section>
				<section>
					<label htmlFor="due">Due date</label>
					<input
						onChange={handleChange}
						id="due"
						type="date"
						name="due"
					></input>
				</section>
				<section>
					<label htmlFor="description">Description</label>
					<input
						id="description"
						type="text"
						name="description"
						onChange={handleChange}
					/>
				</section>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default NewTask;
