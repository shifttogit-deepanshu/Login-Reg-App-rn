import React,{useState} from "react"
import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,Alert } from "react-native"
import TextPlace from "../components/TextPlace"
import Btn from "../components/Button"
import ImageUploader from "../components/ImageUploader"
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

const Register = ()=>{

    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const [username,setUsername] = useState()
    const [filename,setFilename] = useState()
    const [pict,setPict] = useState()
    const [loading,setLoading] = useState(false)

    const uploadPhoto = (pic)=>{
        const fileName = pic.substring(pic.lastIndexOf('/') + 1); + new Date().getTime()
        
        setFilename(fileName)

        setPict(pic)
    }

    const onSubmit = ()=>{
        setLoading(true)
        if(username && name && password && filename){
            
            firestore()
            .collection('Users')
            .doc(username)
            .set({
                Name: name,
                Status: "User",
                password:password,
                pict:filename,
                approved:0
            })
            .then(() => {
                const reference = storage().ref(filename);

                let task = reference.putFile(pict)
        
                task.on('state_changed', taskSnapshot => {
                    console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
                });
                    
                task.then(() => {
                console.log('Image uploaded to the bucket!');
                console.log('User added!');
                setLoading(false)
                });    
                
            });
        }
        else{
            Alert.alert(
                'Registration Failed',
                'Please Make sure all the fields are filled',
                [
                  {
                    text: 'Cancel',
                    onPress: () =>setLoading(false),
                    style: 'cancel',
                  },
                ],
                {
                  cancelable: true,
                  onDismiss: () =>
                    setLoading(false)
                }
              );
        }
    }
    
    return (
        <View style={styles.container}>
            <TextPlace value={name} onChangeText={setName} placeholder="Enter Full Name"/>
            <TextPlace value={username} onChangeText={setUsername} placeholder="Enter Username"/>
            <TextPlace value={password} onChangeText={setPassword} placeholder="Enter Password"/>
            <ImageUploader onUpload={(pic)=>{uploadPhoto(pic)}}/>            
            {loading?<ActivityIndicator size="large" color="#1e824c"/>:<Btn color="#1e824c" title="Register" onClick={()=>onSubmit()}/>}
        </View>
    )
}

export default Register

const styles = StyleSheet.create({

})