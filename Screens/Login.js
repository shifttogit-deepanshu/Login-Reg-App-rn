import React,{useState} from "react"
import {Text,View,StyleSheet,Alert} from "react-native"
import TextPlace from "../components/TextPlace"
import Btn from "../components/Button"
import firestore from '@react-native-firebase/firestore';

const Login = (props)=>{

    const [username,onChangeUsername] = useState()
    const [password,onChangePassword] = useState()
    const [foundStatus,setFoundStatus] = useState(0)

    const onLogin =()=>{
        

        firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
            let found = 0

            querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.id==username && documentSnapshot.data().password==password){
                    // setUser(documentSnapshot.data())
                    setFoundStatus(foundStatus+1)
                    found=1
                    console.log(documentSnapshot.data())
                    if( documentSnapshot.data().Status=="Admin"){
                        props.navigation.navigate("Admin",{username,password})
                        
                    }
                    else{
                        props.navigation.navigate("Users",{username,password})
                        
                    }                   
                }               
            })

            return new Promise((resolve,reject)=>{
                if(found==1){
                    resolve(1)
                }
                else{
                    resolve(0)
                }
            })

        }).then(res=>{
            if(res==0){
                Alert.alert(
                    'User Not Found',
                    'Please check your credentials',
                    [
                      {
                        text: 'Cancel',
                        onPress: () =>setFoundStatus(0),
                        style: 'cancel',
                      },
                    ],
                    {
                      cancelable: true,
                      onDismiss: () =>
                        setFoundStatus(0)
                    }
                  )
            }
        }).catch(err=>{
            console.log("err....",err)
        })
        
    }

    const onRegister = ()=>{
        props.navigation.navigate("Register")
    }
    return (
        <View style={styles.container}>
            <TextPlace value={username} onChangeText={onChangeUsername} placeholder="Enter Username"/>
            <TextPlace value={password} onChangeText={onChangePassword} placeholder="Enter Password"/>
            <Btn title="Login" onClick={()=>onLogin()} color="#26a65b"/>
            <Btn title="Register" onClick={()=>onRegister()} color="#1e824c"/>
        </View>
        
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        paddingTop:30
    }
})