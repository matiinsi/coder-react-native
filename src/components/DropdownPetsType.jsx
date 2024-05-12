import React, {useState} from 'react'
import { StyleSheet, Text} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useGetPetsTypesQuery } from '../services/petsServices';

const DropdownPetsType = ({isFocus, setIsFocus, handleFilterSubmit, breedSelected, sizeSelected, petSelected}) => {
    const {data: petsType, error, isLoading} = useGetPetsTypesQuery();

    return (
        <>
            {
                !isLoading ? (
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={petsType}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Selecciona' : '...'}
                        searchPlaceholder="Buscar..."
                        value={petSelected}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setIsFocus(false);
                            handleFilterSubmit(breedSelected, sizeSelected, item.value)
                        }}
                    />
                ) : <Text>Loading...</Text>
            }
        </>

    )
}

export default DropdownPetsType

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