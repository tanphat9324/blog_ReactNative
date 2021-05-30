import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit,initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
        <Text>Create Screen</Text>
        <Text style={styles.label}>Enter title: </Text>
        <TextInput style={styles.content} value={title} onChangeText={text=>setTitle(text)}/>
        <Text style={styles.label}>Enter content: </Text>
        <TextInput style={styles.content} value={content} onChangeText={text=>setContent(text)}/>
        <Button title="Save Post" onPress={()=>onSubmit(title,content)}/>
    </View>
    )
}

    BlogPostForm.defaultProps = {
        initialValues: {
            title: '',
            content:''
        }
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

export default BlogPostForm;