import React, { useReducer, useState } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { 
                id: Math.floor(Math.random()*99999),
                title: `Blog Post #${state.length + 1}` }];

        case 'delete_blogpost':
            const data = [...state].filter(item => item.id !== action.id);
            return data;

        case 'get_blogpost':
            let index = state.findIndex(x=> x.id === action.id);
            if(index) return state[index];
            return -1;
            // const data = [...state].filter(item => item.id !== action.id);
            // return data;
        default:
            return state;
    }
}
const addPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}

const deletePost = dispatch => {
    return (id) => {
        dispatch({type:'delete_blogpost', id: id})
    }
}

const getPostById = dispatch => {
    return (id) => {
        dispatch({type:'get_blogpost', id: id})
    }
}



export const { Context, Provider } = createDataContext(
    blogReducer,
    { addPost, deletePost,getPostById },
    []
);