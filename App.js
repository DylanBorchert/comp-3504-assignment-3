import { StatusBar } from 'expo-status-bar';
import { ListViewBase, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ListItems from './ListItems.js';
import SearchItem from './SearchItem.js';
import AddItem from './AddItem.js';
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
  



  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="listitem" component={ListItems} />
        <Stack.Screen name="searchforitem" component={SearchItem} />
        <Stack.Screen name="additem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

