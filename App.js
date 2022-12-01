import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

  const getItemsFromApi = async () => {
    let response = await fetch(
      'http://34.27.133.88:8080/api/items'
    );
    let json = await response.json();
    console.log("--------------------" + JSON.stringify({
      "id": 1, 
      "name": "aaaaa", 
      "price": "5.00", 
      "quantity": 1, 
      "supplier_id": 50001
    }) + "---------------------");
    console.log(json);
    return json;
  };

  const addItemTOApi = async () => {
    try{
    let response = await fetch(
      'http://34.27.133.88:8080/api/items', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

  // fill out the body with the data you want to send
  // resending this again will give an error since it already exists
  body: JSON.stringify({
    "id": 11, 
    "name": "aaaaa", 
    "price": "5.00", 
    "quantity": 1, 
    "supplier_id": 50001
  })
});
    let json = await response.json();
    //console.log(json);
    
  } catch (error) {
    console.error("--------------" + error);
 }
    //return json;
  };



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={addItemTOApi}>
          <Text style={styles.text}>Add Item to List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getItemsFromApi}>
          <Text style={styles.text}>Call list</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
  fontSize: 40,
  
  }
});
