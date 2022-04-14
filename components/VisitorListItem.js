import React,{useEffect,useState} from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import storage from '@react-native-firebase/storage'

const VisitorListItem = (props)=>{
    const [imurl,setImurl] = useState()

    useEffect(()=>{

        console.log(props.pic)
        storage().ref(props.pic).getDownloadURL().then(res=>{
            setImurl(res)

            console.log("imgurl......",res)
         }).catch(err=>{
         })
    },[])

    return (
        <View style={[{...styles.container},{...props.styles}]} >
            <Image source={{uri:imurl}} style={styles.img}/>
            <View>
                <Text style={styles.txt}>{props.name}</Text>
                <Text style={styles.vno}>Vehicle No. {props.vno}</Text>
            </View>
            
        </View>
    )
}

export default VisitorListItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        width:"100%",
        elevation:20,
        marginTop:20,
        padding:20,
        flexDirection:"row"
    },
    img:{
        width:80,
        height:80,
        borderRadius:500
    },
    txt:{
        fontWeight:"900",
        fontSize:20,
        marginLeft:30
    },
    vno:{
        color:"grey",
        fontSize:16,
        marginTop:5,
        marginLeft:30
    }
})