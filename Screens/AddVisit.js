import React,{useState} from "react"
import {View,ActivityIndicator,Alert } from "react-native"
import TextPlace from "../components/TextPlace"
import Btn from "../components/Button"
import ImageUploader from "../components/ImageUploader"
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

const AddVisit = (props)=>{

    const [name,setName] = useState()
    const [vno,setVno] = useState(0)
    const [pict,setPict] = useState()
    const [filename,setFilename] = useState()
    const [loading,setLoading] = useState(false)
    const [visitors,setVisitors] = useState()

    const uploadPhoto = (pic)=>{
        const fileName = pic.substring(pic.lastIndexOf('/') + 1); + new Date().getTime()
        
        setFilename(fileName)

        setPict(pic)
    }

    const onSubmit = ()=>{
        setLoading(true)
        if(name && vno && pict){

            firestore()
            .collection('Users')
            .doc(props.route.params.username)
            .get()
            .then(documentSnapshot => {
                return new Promise((resolve,reject)=>{
                    resolve(documentSnapshot.data().visitors)
                })
            }).then(visitors=>{
            firestore()
            .collection('Users')
            .doc(props.route.params.username)
            .update({
                visitors:[...visitors,{id:new Date().getTime(),name,vno,pict}]
            })
            .then(() => {
                const reference = storage().ref(filename);

                let task = reference.putFile(pict)
        
                task.on('state_changed', taskSnapshot => {
                    console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
                });
                    
                task.then(() => {
                console.log('Image uploaded to the bucket!');
                console.log('Visitor added!');
                setLoading(false)
                props.navigation.navigate("Users",{username:props.route.params.username,password:props.route.params.password})
                });                    
            });
            })
            
            
        }
        else{
            Alert.alert(
                'Visitor Registration Failed',
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
        <View>
            <TextPlace value={name} onChangeText={setName} placeholder="Enter Full Name"/>
            <TextPlace value={vno} onChangeText={setVno} placeholder="Enter Vehicle Number"/>
            <ImageUploader onUpload={(pic)=>{uploadPhoto(pic)}}/>            
            {loading?<ActivityIndicator size="large" color="#1e824c"/>:<Btn color="#1e824c" title="Register" onClick={()=>onSubmit()}/>}
        </View>
    )
}

export default AddVisit

