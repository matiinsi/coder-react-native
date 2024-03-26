import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import CheckIcon from '../icons/CheckIcon';
import UncheckIcon from '../icons/UncheckIcon';

export default class Item extends Component {
  render() {

    const { text, id, checked, modalVisible, setModalVisible, setSelectedItem, handleCheck } = this.props;

    return (
      <View style={(checked) ? styles.itemChecked : styles.item }>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleCheck(id)}
        >
          { (checked) ? <UncheckIcon color={'black'} /> : <CheckIcon color={'green'} /> }
        </TouchableOpacity>
        <Text key={id}>{text}</Text>
        <Button 
          title="X"
          style={styles.close}
          onPress={() => {
            setModalVisible(!modalVisible)
            setSelectedItem({ "id": id, "text": text, "checked": false })
          }}
        />
      </View>      
    )
  }
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },
    itemChecked: {
      padding: 16,
      marginTop: 16,
      borderColor: 'green',
      backgroundColor: 'lightgreen',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between'
    },
    close: {
        marginLeft: 'auto',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    checkedText: {
      fontSize: 16,
      marginRight: 10,
      textDecorationLine: 'line-through',
    },
    text: {
      fontSize: 16,
      marginRight: 10,
    },
    buttonClose: {
      color: 'red',
      fontWeight: 'bold',
    }
})