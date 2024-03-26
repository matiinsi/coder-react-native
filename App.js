import {useState} from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList, Modal } from "react-native";
import Item from "./components/Item";
import ModalCustom from "./components/ModalCustom";

const App = () => {

  const [items, setItems] = useState([]);
  const [textInputValue, setTextInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleAddItem = (text) => {
    if (text === "") return;
    setItems([...items, { "id": items.length + 1, "text": text, "checked": false }]);
    resetInput();
  }

  const handleBorrarItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  const handleCheck = (id) => {

    const newItems = items.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
  
    setItems(newItems);
  }

  const resetInput = () => {
    setTextInputValue("");
  }

  return(
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput 
          style={style.input} 
          placeholder="Escribe una tarea"
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
        <TouchableOpacity 
          style={style.button}
          onPress={() => handleAddItem( textInputValue )}
        >
          <Text style={style.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={items}
        renderItem={
          ({ item }) => 
              <Item 
                text={item.text} 
                id={item.id}
                checked={item.checked}
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} 
                setSelectedItem={setSelectedItem}
                handleCheck={handleCheck}
              />
          }
        keyExtractor={item => item.id.toString()}
        style={style.taskContainer}
      />

      <ModalCustom
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedItem={selectedItem}
        handleBorrarItem={handleBorrarItem}
      />
    </View>
  )
}

export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  inputContainer: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 0.5, 
    borderBottomColor: '#000', 
    width: "200",
    backgroundColor: "#f2f2f2",
    height: 40,
    flex: 1,
  },
  buttonText: {
    color: 'white', // Cambia el color del texto del botón
    textAlign: 'center', // Alinea el texto en el centro del botón
    fontWeight: 'bold', // Aplica negrita al texto del botón
  },
  button: {
    backgroundColor: "#000",
    height: 40,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  taskContainer: {
    padding: 16,
  },
})