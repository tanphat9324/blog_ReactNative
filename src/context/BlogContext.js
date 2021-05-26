import React, { useReducer, useState } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,{title: `Blog Post #${state.length + 1}`}]    
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {

    const [posts, dispatch] = useReducer(blogReducer,[]);

    const addPost = () => {
        dispatch({type:'add_blogpost'})
    }
    
    return <BlogContext.Provider value={{data: posts,addPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;