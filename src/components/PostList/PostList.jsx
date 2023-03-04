import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/v1/posts').then((response) => {
            const postList = response && response.data && response.data.data && response.data.data.rows;
            setPostList(postList);
        });
    }, []);

    return (
        <div className="container">
            <h1>Post List</h1>
            <Link to="/post/add">Add Post</Link>
            {postList.map((post) => (
                <Card key={post._id}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Card.Link href="#">
                            <Link to={`/post/${post._id}`}>View Post</Link>
                        </Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default PostList;
