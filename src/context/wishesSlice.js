import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
    name: "wishes",
    initialState: {
        value: JSON.parse(localStorage.getItem("wishes")) || [],
    },
    reducers: {
        addToWishes(state, action) {
            state.value = [...state.value, action.payload];
            localStorage.setItem("wishes", JSON.stringify(state.value));
        },
        removeFromWishes(state, action) {
            state.value = state.value.filter(
                (el) => el._id !== action.payload._id
            );
            localStorage.setItem("wishes", JSON.stringify(state.value));
        },
    },
});

export const { addToWishes, removeFromWishes } = wishesSlice.actions;
export default wishesSlice.reducer;
