import React from "react"
import {View,Text,FlatList,StyleSheet} from "react-native"
import VisitorItemList from "./VisitorListItem";

const List = (props)=>{
    const DATA = props.data

    console.log("DATA",DATA)
        
    // const renderItem = ({ item }) => <VisitorItemList name={item.name} />;

    return (
    <View style={styles.container}>
      {/* {DATA.map(item=>{
          return <VisitorItemList name={item.name} key={item.id}/>
      })} */}
      <VisitorItemList name="sdfsdfsdf" key="123"/>
    </View>
  );
}

export default List


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
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