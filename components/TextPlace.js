import React,{useState} from "react"
import {View,TextInput,StyleSheet} from "react-native"


const TextPlace = (props)=>{

    return (
        <View>
            <TextInput 
                value={props.value}
                onChangeText={props.onChangeText}  
                style={styles.textbox}  
                placeholder={props.placeholder}            
            />
        </View>
    )
}

export default TextPlace

const styles = StyleSheet.create({
    textbox:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:20,
        padding:10,
        paddingLeft:20
    }
})