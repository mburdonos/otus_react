import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});
export const { addToCart, removeFromCart, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;
