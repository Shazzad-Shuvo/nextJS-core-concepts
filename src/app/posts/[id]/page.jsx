import { getPostDetails } from '@/services/postApi';
import React from 'react';

export const generateMetadata = async ({params}) =>{
    const id = (await params).id;

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // const postData = await res.json();
    const {title, body} = await getPostDetails(id);

    return {
        title: {
            absolute: `${title}`
        },
        description: `${body}`,
        keywords: body.split(' ')
    }
}

const PostDetailsPage = async ({params}) => {
    const {id} = await params;
    // console.log(id); 
    const {title, body} = await getPostDetails(id);
    // console.log(postDetails);
    return (
        <div className='border-2 border-red-500 p-10 h-screen'>
            <h2>Post Number: {id}</h2>
            <h4>Title: {title}</h4>
            <h4>Description: {body}</h4>
        </div>
    );
};

export default PostDetailsPage;