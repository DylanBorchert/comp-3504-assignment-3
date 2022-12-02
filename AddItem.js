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

    // const getSupplierIDList = () => {
    //     const json = getSupplierIDFromApi;
    //     const data = json.map(function(id) {
    //         return {
    //             key: id
    //         }
    //     });
    //     return data;
    // }

    // const getSupplierIDFromApi = async () => {
    //     try {
    //         let response = await fetch(
    //             'http://34.27.133.88:8080/api/suppliers/id'
    //         );
    //         let json = await response.json();
    //         return  json;
    //     } catch (error) {
    //         console.error("---------" + error);
    //     } 
    // };

    const getSupplierIDList = async () => {
    
        try {
          //get user info from database
          const response = await fetch(`http://34.27.133.88:8080/api/suppliers/id`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
            //update push token
          var data = await response.json();
          //add key to each object
            data = data.map(function(m) {
                return {
                    key: m.id,
                    value: m.id
                }
            });
          setSupplierIDList(data);
    
        } catch (err) {
          console.log(err);
        }
    
      }
    

    useEffect(() => {

        getSupplierIDList();

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
            <View>
                <Text>Item ID is: {itemID}</Text>
                <Text>Item Name is: {itemName}</Text>
                <Text>Item Quantity is: {itemQuantity}</Text>
                <Text>Item Price is: {itemPrice}</Text> 
                <Text>Item Supplier ID is: {itemSupplierID}</Text>
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