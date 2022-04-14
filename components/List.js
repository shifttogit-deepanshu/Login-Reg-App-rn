import React from "react"
import {View,Text,StyleSheet,ScrollView} from "react-native"
import VisitorItemList from "./VisitorListItem";

const List = (props)=>{
    const DATA = props.data
        
    // const renderItem = ({ item }) => <VisitorItemList name={item.name} />;

    return (
    <View style={styles.container}>
      {DATA.map(item=>{
          return <VisitorItemList name={item.name} key={item.id} pic={item.filename} vno={item.vno}/>
      })}
    </View>
  );
}

export default List


const styles = StyleSheet.create({
    container: {
      margin:12,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });