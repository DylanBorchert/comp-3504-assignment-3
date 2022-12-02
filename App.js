import { StatusBar } from 'expo-status-bar';
import { ListViewBase, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ListItems from './ListItems.js';
import SearchItem from './SearchItem.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  
  
  const Stack = createNativeStackNavigator();


  return (
   
      <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="listitem" component={ListItems} />
         <Stack.Screen name="searchforitem" component={SearchItem} />
     </Stack.Navigator> 
      </NavigationContainer>
  );
}


