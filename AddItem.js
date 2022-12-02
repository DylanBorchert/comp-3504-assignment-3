import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useEffect, useState, React } from 'react';


const AddItem = ({ }) => {

    const [itemID, setItemID] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemPrice, setItemPrice] = useState("");
    const [itemSupplierID, setSupplierID] = useState(0);

    // Uncomment this:
    // const [supplierIDList, setSupplierIDList] = useState([]);

    // Delete this:
    const supplierIDList = [
        { key: 50001, value: 50001 },
        { key: 50002, value: 50002 },
        { key: 50003, value: 50003 },
        { key: 50004, value: 50004 },
        { key: 50005, value: 50005 },
    ];

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

    //Uncomment this:

    // const getSupplierIDList = async () => {

    //     try {
    //       //get user info from database
    //       const response = await fetch(`http://34.27.133.88:8080/api/suppliers/id`, {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //         //update push token
    //       var data = await response.json();
    //       //add key to each object
    //         data = data.map(function(m) {
    //             return {
    //                 key: m.id,
    //                 value: m.id
    //             }
    //         });
    //       setSupplierIDList(data);

    //     } catch (err) {
    //       console.log(err);
    //     }

    //   }


    useEffect(() => {

        // Uncommented this:
        // getSupplierIDList();

    }, []);

    return (

        <View>
            <Text>Add New Item:</Text>
            <View>
                <TextInput placeholder="ID" onChangeText={newText => setItemID(newText)}></TextInput>
                <TextInput placeholder="Name" onChangeText={newText => setItemName(newText)}></TextInput>
                <TextInput placeholder="Quantity" onChangeText={newText => setItemQuantity(newText)}></TextInput>
                <TextInput placeholder="Price" onChangeText={newText => setItemPrice(newText)}></TextInput>
                <SelectList data={supplierIDList} setSelected={(val) => setSupplierID(val)}></SelectList>
            </View>
            <View>
                <TouchableOpacity onPress={addItemTOApi}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

}



export default AddItem;