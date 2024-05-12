import { createSlice } from "@reduxjs/toolkit";
import { filterLost } from "../../constants/filterLost";

export const petsSlice = createSlice({
    name: "pets",
    initialState: {
        value: {
            filterLost: filterLost
        }
    },
    reducers: {
        setFilterLost: (state, action) => { // Metodo para cambiar el estado
            state.value.filterLost = action.payload;
        },
        setCleanFilterLost: (state) => {
            state.value.filterLost = filterLost
        
        }
    }
});

export const { setFilterLost, setCleanFilterLost } = petsSlice.actions; // Exporto los estados
export default petsSlice.reducer;