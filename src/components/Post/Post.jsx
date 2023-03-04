import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8001/v1/posts/${id}`).then((response) => {
            setPostDetails(response.data.data);
        });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8001/v1/posts/${id}`).then((response) => {
            console.log(response);
            navigate('/');
        });
    };

    return (
        <div className="container">
            {postDetails ? (
                <>
                    <h1>Post Details</h1>
                    <Card>
                        <Card.Body>
                            <Card.Title>{postDetails.title}</Card.Title>
                            <Card.Text>{postDetails.body}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Card.Link as={Link} to={`/post/edit/${postDetails._id}`}>
                                    Edit Post
                                </Card.Link>
                                <Button variant="danger" onClick={handleDelete}>
                                    Delete Post
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PostDetails;
