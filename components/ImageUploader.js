import React,{useState} from "react"
import {View,TouchableOpacity,StyleSheet,Text,Image} from "react-native"
import * as ImagePicker from 'expo-image-picker';


const ImageUploader = (props)=>{
   const [image, setImage] = useState()

   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect:[1,1]
      });
    
      if (!result.cancelled) {
        setImage(result.uri);
        props.onUpload(result.uri)
      }
    };
  
    return (
      <View >
        <TouchableOpacity onPress={pickImage} style={styles.imager}>{
          !image?<Text style={styles.txt}>Upload Image</Text>:<Image style={styles.img} source={{ uri: image }} />
          }</TouchableOpacity>
      </View>
    );
}

export default ImageUploader

const styles = StyleSheet.create({
  imager:{
    backgroundColor:"#26a65b",
    height:300,
    margin:12,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
  
  },
  txt:{
    color:"white"
  },
  img:{
    height:300,
    margin:12,
    width:"100%",
    borderRadius:20
  }
})