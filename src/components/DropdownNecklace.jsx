import React from 'react'
import { StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';

const DropdownNecklace = ({filter = false, isFocus, setIsFocus, handleFilterSubmit = () => {}}) => {

    const dispatch = useDispatch();
    const {petSelected, breedSelected, sizeSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected, addPet} = useSelector(state => state.pets.value);

    const data = [
        { label: 'Si', value: 2 },
        { label: 'No', value: 1 },
    ]

    const handleAddPet = (item) => {
        dispatch(setAddPet({...addPet, necklace: item}));
    }

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecciona' : '...'}
            value={(filter) ? necklaceSelected : addPet.necklace}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setIsFocus(false);
                (filter) ? handleFilterSubmit(breedSelected, sizeSelected, petSelected, item.value, dateLostSelected, countrySelected, stateSelected.value) : handleAddPet(item.value)
            }}
        /> 

    )
}

export default DropdownNecklace

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
})