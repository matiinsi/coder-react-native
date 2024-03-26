import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class ModalCustom extends Component {
  render() {

    const { modalVisible, setModalVisible, selectedItem, handleBorrarItem } = this.props;

    return (
        <Modal 
            visible={modalVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modalStyle}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalContainerTitle}>¿Desea eliminar el elemento {selectedItem.text}?</Text>
                <View style={styles.modalContainerButton}>
                    <TouchableOpacity
                    style={styles.buttonCancelar}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonBorrar}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            handleBorrarItem(selectedItem.id)
                        }}
                    >
                        <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)"
      },
      modalContainer: {
        padding: 20,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      },
      modalContainerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
      },
      modalContainerButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
      },
      buttonCancelar: {
        backgroundColor: "#000",
        height: 40,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      },
      buttonBorrar: {
        backgroundColor: "#ff0000",
        height: 40,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      },
      buttonText: {
        color: 'white', // Cambia el color del texto del botón
        textAlign: 'center', // Alinea el texto en el centro del botón
        fontWeight: 'bold', // Aplica negrita al texto del botón
      },
})
