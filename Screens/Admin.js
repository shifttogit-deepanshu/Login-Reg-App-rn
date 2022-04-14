import React,{useState,useEffect} from "react"
import {Text,View,StyleSheet,ScrollView} from "react-native"
import firestore from '@react-native-firebase/firestore';
import UserCard from "../components/UserCard";

const Login = (props)=>{ 

    const [users,setUsers] = useState([])

    useEffect(() => {
        firestore()
          .collection('Users')
          .get().then(querySnapshot=>{
              querySnapshot.forEach(documentSnapshot=>{
                  if(documentSnapshot.data().Status=="Admin"){
                                      
                    }
                    else{
                      setUsers([...users,{...documentSnapshot.data(),id:documentSnapshot.id}])
                      console.log("users...",users)  
                    }
              })              
          })
    
        
      },[]);

    return (
        <ScrollView style={styles.container}>
            {users.map(user=>{
                return <UserCard name={user.Name} visitors={user.visitors} id={user.id} pic={user.pic}/>
            })}
        </ScrollView>        
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        paddingTop:30
    }
})