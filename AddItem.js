import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useEffect, useState, React } from 'react';


const AddItem = ({ }) => {

    const [itemID, setItemID] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemPrice, setItemPrice] = useState("");
    const [itemSupplierID, setSupplierID] = useState(0);

    const [supplierIDList, setSupplierIDList] = useState([]);


    const addItemTOApi = async () => {
        try {
            let response = await fetch(
                'http://34.27.133.88:8080/api/items', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": itemID,
                    "name": itemName,
                    "price": itemPrice,
                    "quantity": itemQuantity,
                    "supplier_id": itemSupplierID
                })
            });
            let json = await response.json();
            if (response.status == 200) {
                console.log("item was successfully added");
            }
        } catch (error) {
            console.error("--------------" + error);
        }
    };

    useEffect(() => {

        fetch("http://34.27.133.88:8080/api/suppliers/id", {
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            }
        })
            .then((resp) => resp.json())
            .then(result => {
                console.log(result);
                setSupplierIDList(result);

            }).catch(error => {
                console.log(error);
            })

    }, []);

    return (

        <View>
            <Text>Add New Item:</Text>
            <View>
                <TextInput placeholder="ID" onChangeText={newText => setItemID(newText)}></TextInput>
                <TextInput placeholder="Name" onChangeText={newText => setItemName(newText)}></TextInput>
                <TextInput placeholder="Quantity" onChangeText={newText => setItemQuantity(newText)}></TextInput>
                <TextInput placeholder="Price" onChangeText={newText => setItemPrice(newText)}></TextInput>
                <SelectList data={supplierIDList}></SelectList>
            </View>
            <TouchableOpacity>
                <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addItemTOApi}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>

    );

}



export default AddItem;