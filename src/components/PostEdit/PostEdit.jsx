import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState({ title: '', body: '' });

    useEffect(() => {
        axios.get(`http://localhost:8001/v1/posts/${id}`).then((response) => {
            const postDetails = response && response.data && response.data.data;
            setPostDetails(postDetails);
        });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8001/v1/posts/${id}`, postDetails).then((response) => {
            console.log(response);
            navigate(`/post/${id}`);
        });
    };

    return (
        <div className="container">
            <h1>Update Post</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={postDetails.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter body"
                        name="body"
                        value={postDetails.body}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Post
                </Button>
            </Form>
        </div>
    );
}

export default PostEdit;
