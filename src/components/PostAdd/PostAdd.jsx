import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PostAdd() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const navigate = useNavigate();

	const onSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:8001/v1/posts", { title, body })
			.then((response) => {
				console.log(response);
				navigate("/");
			});
	};

	return (
		<div className="container">
			<h1>Add Post</h1>
			<Form onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Body</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={body}
						onChange={(event) => setBody(event.target.value)}
					/>
				</Form.Group>

				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}

export default PostAdd;
