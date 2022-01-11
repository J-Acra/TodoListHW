import React, { useState } from "react";

const TodoList = () => {
	let [count, setCount] = useState(0);
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);
	let [inputText, setInput] = useState("");

	const handleInput = (pressedKey) => {
		if (pressedKey.keyCode == 13) {
			if (inputText === "") {
				alert("Sorry, add task please.");
			} else {
				setTask(pressedKey.target.value);
				setList([...list, task]);
				setTask("");
				setInput("");
				setCount(count + 1);
			}
		}
	};

	return (
		<div className="container-fluid">
			<div className="pt-5 text-center mx-auto">
				<h1 className="fw-light title opacity-25">Your Todo List</h1>
			</div>
			<div className="">
				<div className="">
					<div className="">
						<div className="input-group border">
							<input
								className="form-control"
								type="text"
								value={inputText}
								placeholder="To Do List"
								onChange={(inputKeyPress) => {
									setTask(inputKeyPress.target.value);
									setInput(inputKeyPress.target.value);
								}}
								onKeyDown={(inputKeyPress2) =>
									handleInput(inputKeyPress2)
								}></input>
						</div>
						<div className="w-100 h-100">
							<ul>
								{list.map((singleTask, i) => {
									return (
										<li className="" key={i}>
											{singleTask}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TodoList;
