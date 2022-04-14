import React,{useState} from "react"
import {Text,View,StyleSheet} from "react-native"
import firestore from '@react-native-firebase/firestore';


const Login = (props)=>{ 

    return (
        <View style={styles.container}>
            <Text>Admin</Text>
        </View>
        
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        paddingTop:30
    }
})