import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        incCart(state, { payload }) {
            let index = state.value.findIndex((el) => el._id === payload._id);
            if (index < 0) {
                state.value = [...state.value, { ...payload, quantity: 1 }];
            } else {
                state.value = state.value.map((item, inx) => {
                    if (inx === index) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        },
        deCart(state, { payload }) {
            let index = state.value.findIndex((el) => el._id === payload._id);
            state.value = state.value.map((item, inx) =>
                index === inx ? { ...item, quantity: item.quantity - 1 } : item
            );
        },
        removeCart(state, { payload }) {
            state.value = state.value.filter(
                (item) => item._id !== payload._id
            );
        },
        removeAllCart(state) {
            state.value = [];
        },
    },
});

export const { incCart, deCart } = cartSlice.actions;
export default cartSlice.reducer;
