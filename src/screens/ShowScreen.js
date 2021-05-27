import React, { useContext, useEffect } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    const {state,getPostById} = useContext(Context);
    useEffect(() => {
        getPostById(navigation.getParam('id'));
    }, [])
    return (
        <View>
            <Text>Show Screen</Text>
            <Text>{state.id}</Text>
            <Text>{state.title}</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ShowScreen;