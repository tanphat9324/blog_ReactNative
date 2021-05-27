import React, { useContext } from 'react';
import {Text,View,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state,addPost,deletePost} = useContext(Context);
    return (
        <View>
            <Text>Index Screen</Text>
            {/* <Text>{value}</Text> */}
            <TouchableOpacity onPress={addPost}>
                <Text>Add Post</Text>
            </TouchableOpacity>
            <FlatList
            data={state}
            keyExtractor={blogPosts=>blogPosts.title}
            renderItem={({item})=>{
                return(
                    <View style={styles.container}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <Text>{item.title} #{item.id}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>deletePost(item.id)}>
                        <Feather name="trash"/>
                        </TouchableOpacity>
                    </View>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default IndexScreen;