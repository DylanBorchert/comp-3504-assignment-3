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
        if (itemID == "" || itemName == "" || itemQuantity == "" || !isValidPrice(itemPrice) || itemSupplierID == 0) {
            alert(`Error: Missing field or incorrect price format. Item not added. `)
            return;
        }
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
                alert("Item successfully added!");
            }
        } catch (error) {
            alert("Error: " + error);
            console.error("--------------" + error);
        }
    };

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
            data = data.map(function (m) {
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

    // Price format needs to be in #+.## (any number of digits, followed by a decimal, followed by two digits).
    const isValidPrice = (price) => {
        return /^\d+\.\d{2}/.test(price);
    }

    useEffect(() => {

        getSupplierIDList();

    }, []);

    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>Add New Item:</Text>
            <View>
                <TextInput placeholder="ID" onChangeText={newText => setItemID(newText)} style={styles.inputField}></TextInput>
                <TextInput placeholder="Name" onChangeText={newText => setItemName(newText)} style={styles.inputField}></TextInput>
                <TextInput placeholder="Quantity" onChangeText={newText => setItemQuantity(newText)} style={styles.inputField}></TextInput>
                <TextInput placeholder="Price" onChangeText={newText => setItemPrice(newText)} style={styles.inputField}></TextInput>
                <SelectList data={supplierIDList} setSelected={(val) => setSupplierID(val)} style={styles.inputField} />
            </View>
            <Text>{"\n"}</Text>
            <View>
                <TouchableOpacity onPress={addItemTOApi} style={styles.buttons}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    buttons: {
        margin: 5,
        fontWeight: "bold",
        alignSelf: 'center',
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            height:1,
            width:-2
          },
          elevation:2
    },
    container: {
        width: 350,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .2,
        alignContent: "center",
        shadowOffset: {
            height: 1,
            width: -2
        }, 
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        setButtonText: "Black",
        fontWeight: "bold",
    },
    inputField: {
        fontSize: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        height: 50,
        width: 330,
        marginBottom: 20,
        paddingLeft: 20,
        alignContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 1,
            width: -2
        }, 
        elevation: 2,
    },
    titleText: {
        fontSize:24,
        fontWeight: "bold",
        alignSelf:'center',
        marginLeft:10,
        padding: 5,
        paddingBottom: 20
    },
});



export default AddItem;