import React,{useEffect,useState} from "react"
import {View,StyleSheet} from "react-native"
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Profile from "../components/Profile"
import Btn from "../components/Button"
import List from "../components/List";

const User = (props)=>{

    const [name,setName] = useState()
    const [imurl,setImurl] = useState()
    const [visitors,setVisitors] = useState([])

    useEffect(()=>{
        
        firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {

            querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.id==props.route.params.username && documentSnapshot.data().password==props.route.params.password){
                    // console.log(documentSnapshot.data)
                     setName(documentSnapshot.data().Name)
                     setVisitors([{id:243234,name:"Deepanshu"}])   
                     console.log(visitors)      
                     storage().ref(documentSnapshot.data().pic).getDownloadURL().then(res=>{
                        setImurl(res)
                     })
                }               
            })
        })
    },[])
    return (
        <View>
            <Profile name={name} imuri={imurl}/>
            <Btn title="Add Visitor" onClick={()=>props.navigation.navigate("AddVisit",{username:props.route.params.username})} color="#26a65b"/>
            {visitors && <List data={visitors}/>}
        </View>
    )
}

export default User


const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:200
    },
    name:{
        fontWeight:"900",
        color:"#1e824c"
    }
})