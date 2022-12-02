import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Alert, Modal, Pressable, } from "react-native";

import React, { useState, useEffect } from 'react';

const ListItems = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('additem');
      }

    //   let items = [];
      let [items, setItems] = useState([]);
      const [modalVisible, setModalVisible] = useState(false);
      const [itemName, setItemName] = useState();
      const [clickedItem, setClickedItem] = useState({});

      useEffect(() => {
         
        fetch("http://34.27.133.88:8080/api/items")
            .then((resp) => resp.json())
            .then(result => {
               
                setItems(result);
                
            })

      }, []);


    return (
        <View style={styles.container} >
            <Text style={styles.header}>List of Items</Text>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Item Name: {clickedItem.name}</Text>
                        <Text style={styles.modalText}>Item Price: {clickedItem.price}</Text>
                        <Text style={styles.modalText}>Item Quantity: {clickedItem.quantity}</Text>
                        <Text style={styles.modalText}>Item Supplier: {clickedItem.supplier_id}</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Hide</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
                <FlatList
                    data={items}
                    keyExtractor={item => item.first}
                    renderItem={({ item }) => ( 
                        <Pressable style={[styles.box]} onPress={() => {setModalVisible(true); setItemName(item.name); setClickedItem(item)}} >
                            <View>
                                <Text style={styles.username}>{item.name}</Text>
                            
                            </View>
                    </Pressable>    
                    )}
                    />
            </View>
            <TouchableOpacity>
                <Text onPress={pressHandler} style={styles.button}> Add Item</Text>
            </TouchableOpacity> 
        </View>
    );

}


const styles = StyleSheet.create ({
    container: {
        height:700
      }, 
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      username:{
        color: "284b63",
        fontSize:22,
        alignSelf:'center',
        marginLeft:10
      }, 
      header: {
        fontSize:24,
        fontWeight: "bold",
        alignSelf:'center',
        marginLeft:10,
        padding: 5
      },
      
  box: {
    width: 350,
    padding:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  button: {
    margin:5,
    fontSize:24,
    fontWeight: "bold",
    alignSelf:'center',
    marginLeft:10,
    padding: 10,
    // borderWidth: 5, 
    // // borderColor:'#FFFFFF',
    // borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2

  }, 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }



})

export default ListItems;