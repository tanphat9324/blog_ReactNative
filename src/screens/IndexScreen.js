import React, { useContext } from 'react';
import {Text,View,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const {data,addPost} = useContext(BlogContext);
    return (
        <View>
            <Text>Index Screen</Text>
            {/* <Text>{value}</Text> */}
            <TouchableOpacity onPress={addPost}>
                <Text>Add Post</Text>
            </TouchableOpacity>
            <FlatList
            data={data}
            keyExtractor={blogPosts=>blogPosts.title}
            renderItem={({item})=>{
                return(
                    <Text>{item.title}</Text>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default IndexScreen;