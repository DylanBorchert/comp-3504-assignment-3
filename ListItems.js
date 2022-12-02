import { View, Text, TouchableOpacity} from "react-native";


const ListItems = ({navigation}) => {

    const pressHandlerSearch = () => {
        navigation.navigate('searchforitem');
      }
      const pressHandlerAdd = () => {
        navigation.navigate('additem');
      }

    return (
        <View>
            <TouchableOpacity>
                <Text onPress={pressHandlerSearch}> Search for Item</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity>
                <Text onPress={pressHandlerAdd}> Add Item</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ListItems;