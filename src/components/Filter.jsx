import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../constants/colors';
import FilterModal from './FilterModal';


const Filter = () => {

    const [showModalFilter, setShowModalFilter] = useState(false);
    const [breedSelected, setBreedSelected] = useState("");
    const [sizeSelected, setSizeSelected] = useState("");

    const handleShowFilter = () => {
        setShowModalFilter(!showModalFilter);
    }

    return (
        <View style={styles.filterContainer}>
            <Text style={styles.titleFilter}>Mascotas cerca de ti</Text>
            <TouchableOpacity onPress={handleShowFilter} style={styles.filterButton}>
                <FontAwesome6 name="filter" size={24} color="black" />
            </TouchableOpacity>
            {
                showModalFilter && (
                    <FilterModal 
                        setShowModalFilter={setShowModalFilter} 
                        setBreedSelected={setBreedSelected}
                        breedSelected={breedSelected}
                        setSizeSelected={setSizeSelected}
                        sizeSelected={sizeSelected}
                    />
                )
            }
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    filterContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleFilter: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "left",
        color: colors.blue,
    },
    filterButton: {
        backgroundColor: colors.grayLight,
        padding: 10,
        borderRadius: 10,
        textAlign: "center"
    }
})