import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';

const ListItems = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('searchforitem');
      }

    //   let items = [];
      let [items, setItems] = useState([]);
  
      useEffect(() => {
         
        fetch("http://34.27.133.88:8080/api/items")
            .then((resp) => resp.json())
            .then(result => {
               
                setItems(result);
                
            })

      }, []);


    return (
       
        <View>
            <Text style={styles.header}>List of Items</Text>
            <FlatList
                style={styles.container}
                data={items}
                keyExtractor={item => item.first}
                renderItem={({ item }) => (
                    
                    <View style={styles.box}>
                        <Text style={styles.username}>{item.name}</Text>
                    </View>
                )}
                />
            
            <TouchableOpacity>
                <Text onPress={pressHandler} style={styles.button}> Search for Item</Text>
            </TouchableOpacity>
        
        </View>
    
    );

}


const styles = StyleSheet.create ({
    container: {
        height:420
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
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 15,
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
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2

  }
})

export default ListItems;