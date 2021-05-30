import React, { useReducer, useState } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { 
                id: Math.floor(Math.random()*99999),
                title: action.payload.title,
                content: action.payload.content }];

        case 'delete_blogpost':
            const data = [...state].filter(item => item.id !== action.id);
            return data;

        case 'edit_blogpost': {
                return [...state].map(blogPost=>{
                    return blogPost.id === action.payload.id ? action.payload: blogPost;
                })
        }
        default:
            return state;
    }
}
const addPost = (dispatch) => {
    return (title,content,callback) => {
        dispatch({ type: 'add_blogpost', payload: {title,content} });
        callback();
    }
}

const deletePost = dispatch => {
    return (id) => {
        dispatch({type:'delete_blogpost', id: id})
    }
}

const editPost = dispatch => {
    return (id ,title, content, callback) => {
        dispatch({type:'edit_blogpost', payload: {id,title,content}});
        callback();
    }
}

// const getPostById = dispatch => {
//     return (id) => {
//         dispatch({type:'get_blogpost', id: id})
//     }
// }



export const { Context, Provider } = createDataContext(
    blogReducer,
    { addPost, deletePost, editPost },
    [] //initial variable, testing environment
);