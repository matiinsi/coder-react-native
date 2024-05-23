import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const ButtonAddPet = ({ navigation }) => {
  return (
    <View style={styles.buttonsContainer}>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("PetAddInfo")}
    >
            <Text style={styles.buttonText}>Perdí mi Macota</Text>
        </Pressable>
    </View>
  )
}

export default ButtonAddPet

const styles = StyleSheet.create({
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: colors.yellow,
        padding: 10,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        width: "100%"
    },
    buttonText: {
        color: colors.black,
        fontSize: 14,
        textTransform: "uppercase",
    }
})