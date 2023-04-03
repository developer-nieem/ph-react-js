import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDeatils = () => {
    const postDetails = useLoaderData();
    return (
        <div>
            <h2>{postDetails.title}</h2>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDeatils;