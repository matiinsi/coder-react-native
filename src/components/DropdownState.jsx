import React from 'react'
import { StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';
import { states } from '../data/states';

const DropdownState = ({filter = false, isFocus, setIsFocus, handleFilterSubmit = () => {}}) => {
    
    const dispatch = useDispatch();
    const {petSelected, breedSelected, sizeSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected, addPet} = useSelector(state => state.pets.value);

    const handleAddPet = (item) => {
        dispatch(setAddPet({ 
            ...addPet,
                location: {
                ...addPet.location,
                    state: item
                }
            }
        ));
    }

    const setStates = () => {
        const state = states[filter ? countrySelected : addPet.location?.country];
        return state ? state : [];
    };

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={setStates()}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecciona' : '...'}
            searchPlaceholder="Buscar..."
            value={filter ? stateSelected : addPet.location?.state}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setIsFocus(false);
                (filter) ? handleFilterSubmit(breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, countrySelected, item.value) : handleAddPet(item.value)
            }}
        />

    )
}

export default DropdownState

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