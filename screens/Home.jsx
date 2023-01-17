import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from "react-native-paper";

const Home = ({navigation}) => {
    
    return (
        <View style={{alignItems:"center"}}>
            <SafeAreaView>
                <ScrollView>
                   <Text style={{fontSize:20, marginTop: 10}}>Welcome To Todo App </Text> 
                   <Button textColor='white' style={{marginTop:20, backgroundColor:"blue"}} onPress={()=>navigation.navigate("Todo")}>Click here</Button>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesign: {
        color: "red",
        backgroundColor: "yellow",
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginVertical: 10
    }
});
