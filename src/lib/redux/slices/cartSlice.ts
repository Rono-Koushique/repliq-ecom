import { Product } from "@/types/products";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartProduct = Product & {
    quantity: number;
};

type CartState = {
    cartProducts: CartProduct[];
};

const initialState: CartState = {
    cartProducts: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.cartProducts.find(
                (cartProduct) => cartProduct.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartProducts.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.cartProducts.find(
                (cartProduct) => cartProduct.id === action.payload.id
            );
            if (existingItem) {
                state.cartProducts = state.cartProducts.filter(
                    (currentProduct) => currentProduct.id !== action.payload.id
                );
            }
        },
    },
});

const cartProducts = (state: RootState) => state.cart.cartProducts;

// getting the amount of total products
export const totalCartProductsCountSelector = createSelector(
    [cartProducts],
    (cartProducts) => {
        return cartProducts.reduce(
            (total: number, currentProduct: CartProduct) =>
                (total += currentProduct.quantity),
            0
        );
    }
);

// getting the amount of a single products
export const cartProductCountSelector = createSelector(
    [cartProducts, (cartProducts, productId: string) => productId],
    (cartProducts, productId) =>
        cartProducts.find((currentProduct) => currentProduct.id === productId)
            ?.quantity
);

// getting the total price of all products
export const totalPriceSelector = createSelector(
    [cartProducts],
    (cartProducts) => {
        return cartProducts.reduce(
            (total: number, currentProduct: CartProduct) =>
                (total +=
                    currentProduct.quantity * parseFloat(currentProduct.price)),
            0
        );
    }
);
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
