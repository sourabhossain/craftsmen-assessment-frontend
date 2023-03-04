import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";
import PostEdit from "./components/PostEdit/PostEdit";
import PostAdd from "./components/PostAdd/PostAdd";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="/post/edit/:id" element={<PostEdit />} />
				<Route path="/post/add" element={<PostAdd />} />
			</Routes>
		</>
	);
}

export default App;
