import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalPrice: 0,
    isLoading: true
}
const getTotalPrice = (carts) => {
    let price = carts.reduce((total, cart) => {
        return total += parseFloat(cart.price) * cart.amount;
    }, 0)
    return price.toFixed(2);
}
const url = 'https://course-api.com/react-useReducer-cart-project';
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
});
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalPrice = 0;
        },
        increase: (state, action) => {

            let selectedItem = state.cartItems.find((cart) => {
                return cart.id === action.payload;
            })

            selectedItem.amount = selectedItem.amount + 1;
            state.totalPrice = getTotalPrice(state.cartItems)
            state.totalAmount = state.totalAmount + 1;
        },
        decrease: (state, action) => {
            let selectedItem = state.cartItems.find((cart) => {
                return cart.id === action.payload;
            })
            selectedItem.amount = selectedItem.amount - 1;
            if (selectedItem.amount <= 0) {
                state.cartItems = state.cartItems.filter((cart) => {
                    return cart.id !== action.payload;
                })
            }
            state.totalPrice = getTotalPrice(state.cartItems)
            state.totalAmount = state.totalAmount - 1;
        },
        remove: (state, action) => {
            const id = action.payload;
            console.log(id);
            state.cartItems = state.cartItems.filter((cart) => {
                return cart.id !== id;
            })
            state.totalAmount = state.cartItems.length;
            state.totalPrice = getTotalPrice(state.cartItems);
        }
    }, extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        }),
            builder.addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
                state.totalAmount = state.cartItems.length;
                state.totalPrice = getTotalPrice(state.cartItems)
            }),
            builder.addCase(getCartItems.rejected, (state, action) => {
                state.isLoading = true;
            })
    }


});
//  extraReducers: {
//     [getCartItems.pending]: (state) => {
//         state.isLoading = true
//     },
//     [getCartItems.fulfilled]: (state, action) => {
//         state.isLoading = false;
//         state.cartItems = action.payload;
//         state.totalAmount = state.cartItems.length;
//         state.totalPrice = getTotalPrice(state.cartItems);
//     }, [getCartItems.rejected]: (state) => {
//         state.isLoading = false;
//     }
// }

export const { clearCart, loading, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;