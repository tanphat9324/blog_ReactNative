import React, { useContext, useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const {addPost} = useContext(Context);
    return(
        <View>
            <Text>Create Screen</Text>
            <BlogPostForm onSubmit= {(title,content)=>{
                addPost(title,content,()=>{
                    navigation.pop();
                })
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize: 20,
        fontWeight:'bold',
        marginBottom: 5
    },
    content:{
        padding: 5,
        borderWidth:2,
        borderColor:'#ccc',
        marginBottom:10
    }

})

export default CreateScreen;