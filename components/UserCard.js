import React,{useEffect,useState} from "react"
import {View,Text,StyleSheet,Image,ScrollView} from "react-native"
import storage from '@react-native-firebase/storage'
import VisitorListItem from "./VisitorListItem"

const UserCard = (props)=>{

    const [userpic,setUserpic] = useState()


    useEffect(()=>{
        storage().ref(props.pic).getDownloadURL().then(res=>{
            setUserpic(res)
         })
    },[])
    return (
        <ScrollView key={props.id} style={styles.container}>
            <View style={styles.userpro}>
                <Image source={{uri:userpic}} style={styles.pic}/>
                <View style={{margin:10,marginLeft:20}}><Text style={{fontSize:20}}>{props.name}</Text>
                <Text style={{fontSize:16}}>{props.id}</Text></View>
            </View> 
            <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",color:"#26a65b"}}>Visitors</Text>         
            {props.visitors.map(item=>{
                return <View style={{width:"100%",justifyContent:"center",alignItems:"center",padding:10}}><VisitorListItem name={item.name} key={item.id} pic={item.filename} vno={item.vno} styles={{backgroundColor:"white"}}/></View>
            })}  
        </ScrollView>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        elevation:10,
        margin:12,
        backgroundColor:"white"
    },
    pic:{
        width:60,
        height:60,
        borderRadius:100
    },
    userpro:{
        flexDirection:"row",
        padding:30
    }
})