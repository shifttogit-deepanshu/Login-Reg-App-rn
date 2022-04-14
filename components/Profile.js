import React,{useEffect,useState} from "react"
import {View,Text,StyleSheet,Image} from "react-native"

const Profile = (props)=>{
    return (
        <View style={styles.container}>
           {props.imuri ? <Image source={{uri:props.imuri}} style={styles.img}/>:<View style={styles.emptyimg}></View>}
            {props.name && <Text style={styles.name}>{props.name}</Text>}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    img:{
        height:200,
        width:200,
        borderRadius:500,
        marginTop:20,
        marginBottom:20
    },
    name:{
        marginTop:20,
        fontWeight:"bold",
        color:"#1e824c",
        fontSize:20
    },
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    emptyimg:{
        height:200,
        width:200,
        borderRadius:500,
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#26a65b"
    }
})