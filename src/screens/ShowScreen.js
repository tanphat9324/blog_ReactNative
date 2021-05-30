import React, { useContext, useEffect } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find(x=> x.id === navigation.getParam('id'));
    return (
        <View>
            <Text>Show Screen</Text>
            <Text>{blogPost.id}</Text>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
            <Text></Text>
        </View>
    )
}

 ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id:navigation.getParam('id')})}>
            <MaterialCommunityIcons name="pencil" size={30}/>
        </TouchableOpacity>
    }
}
const styles = StyleSheet.create({

})

export default ShowScreen;