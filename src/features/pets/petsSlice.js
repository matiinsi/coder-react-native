import { createSlice } from "@reduxjs/toolkit";
import { filterLost } from "../../constants/filterLost";
import { addPetValues } from "../../constants/addPetValues";

export const petsSlice = createSlice({
    name: "pets",
    initialState: {
        value: {
            filterLost: filterLost,
            petSelected: "",
            breedSelected: "",
            sizeSelected: "",
            necklaceSelected: "",
            addPet: addPetValues,
        }
    },
    reducers: {
        setFilterLost: (state, action) => { // Metodo para cambiar el estado
            state.value.filterLost = action.payload;
        },
        setCleanFilterLost: (state) => {
            state.value.filterLost = filterLost
        },
        setPetSelected: (state, action) => {
            state.value.petSelected = action.payload;
        },
        setBreedSelected: (state, action) => {
            state.value.breedSelected = action.payload;
        },
        setSizeSelected: (state, action) => {
            state.value.sizeSelected = action.payload;
        },
        setNecklaceSelected: (state, action) => {
            state.value.necklaceSelected = action.payload;
        },
        setAddPet: (state, action) => {
            state.value.addPet = action.payload;
        }
    }
});

export const { 
    setFilterLost, 
    setCleanFilterLost, 
    setBreedSelected, 
    setSizeSelected, 
    setPetSelected,
    setNecklaceSelected,
    setAddPet 
} = petsSlice.actions; // Exporto los estados

export default petsSlice.reducer;