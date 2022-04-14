import React from "react"
import {View,Text,StyleSheet,ScrollView} from "react-native"

const VisitorListItem = (props)=>{

    console.log(".............name..............",props.name)

    return (
        <ScrollView>
            <Text>sdfsdfsdfsdfdsfsdf{props.name}</Text>
        </ScrollView>
    )
}

export default VisitorListItem