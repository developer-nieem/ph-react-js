import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Post = ({post}) => {
       
    return (
        <div style={{border: '1px solid red', margin:'10px'}}>
            <h2>post Id {post.id}</h2>
            <h4>{post.title}</h4>
            <Link to={`/post/${post.id}`}>Post details</Link>
        </div>
    );
};

export default Post;