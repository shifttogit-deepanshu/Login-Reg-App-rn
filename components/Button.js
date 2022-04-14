import React from "react"
import {View,Text,Button,StyleSheet,TouchableOpacity} from "react-native"

const Btn = (props)=>{
    return (
        <View >
        <TouchableOpacity onPress={props.onClick} style={[{...styles.btns},{backgroundColor:props.color}]} ><Text style={styles.btnText}>{props.title}</Text></TouchableOpacity>
        </View>
    )
}

export default Btn


const styles = StyleSheet.create({
    btns:{
        margin:12,
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    },
    btnText:{
        color:"white",
    }
})
