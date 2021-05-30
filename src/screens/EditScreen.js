import React, { useContext, useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state, editPost} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(item => item.id === id);
    return (
        <View>
            <Text>Edit Screen</Text>
            <BlogPostForm initialValues={blogPost} onSubmit={(title,content)=>{
                editPost(id,title,content, ()=>{
                    navigation.pop();
                })
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EditScreen;