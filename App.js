import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

  const getItemsFromApi = async () => {
    let response = await fetch(
      'http://34.27.133.88:8080/api/items'
    );
    let json = await response.json();
    console.log(json);
    return json;
  };



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={getItemsFromApi}>
          <Text>This is a button</Text>
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
});
