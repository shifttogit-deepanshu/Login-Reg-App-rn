import React,{useEffect,useState} from "react"
import {View,StyleSheet,ScrollView} from "react-native"
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
                     setVisitors(documentSnapshot.data().visitors)      
                     storage().ref(documentSnapshot.data().pic).getDownloadURL().then(res=>{
                        setImurl(res)
                     })
                }               
            })
        })
    })
    return (
        <ScrollView>
            <Profile name={name} imuri={imurl}/>
            <Btn title="Add Visitor" onClick={()=>props.navigation.navigate("AddVisit",{username:props.route.params.username})} color="#26a65b"/>
            {visitors && <List data={visitors}/>}
        </ScrollView>
    )
}

export default User
