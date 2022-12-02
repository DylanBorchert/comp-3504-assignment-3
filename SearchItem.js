import { ListViewBase, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

const SearchItem = ({navigation}) => { 

<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity>
          <Text>This is a button</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SearchItem;