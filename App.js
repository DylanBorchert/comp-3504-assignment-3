import { StatusBar } from 'expo-status-bar';
import { ListViewBase, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ListItems from './ListItems.js';
import SearchItem from './SearchItem.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const getItemsFromApi = async () => {
    let response = await fetch(
      'http://34.27.133.88:8080/api/items'
    );
    let json = await response.json();
    console.log(json);
    return json;
  };
  
  const Stack = createNativeStackNavigator();
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
    "id": 3, 
    "name": "aaaaa", 
    "price": "5.00", 
    "quantity": 1, 
    "supplier_id": 50001
  })
});
    let json = await response.json();
    if(response.status == 200){
      console.log("item was successfully added");
    }    
  } catch (error) {
    console.error("--------------" + error);
 }
  };



  return (
   
      <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="listitem" component={ListItems} />
         <Stack.Screen name="searchforitem" component={SearchItem} />
     </Stack.Navigator> 
      </NavigationContainer>
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
