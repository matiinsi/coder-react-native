import { TextInput, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';
import { setColorSelected } from '../features/pets/petsSlice';

import React from 'react'

const InputColor = ({filter = false, isFocus, setIsFocus}) => {
    const dispatch = useDispatch();

    const {colorSelected, addPet} = useSelector(state => state.pets.value);

    const changeTextFilter = (item) => {
        dispatch(setColorSelected(item));
    };

    return (
        <TextInput
            style={[styles.input, isFocus && { borderColor: 'blue' }]}
            placeholder="Color"
            value={filter ? colorSelected : addPet.color}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChangeText={item => {
                setIsFocus(false);
                (filter) ? changeTextFilter(item) : 
                dispatch(setAddPet({...addPet, color: item}))
            }}
        />     
    )
}

export default InputColor

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
})