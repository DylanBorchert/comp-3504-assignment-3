import { View, Text, TouchableOpacity} from "react-native";


const ListItems = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('searchforitem');
      }

    return (
        <View>
            <TouchableOpacity>
                <Text onPress={pressHandler}> Search for Item</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ListItems;