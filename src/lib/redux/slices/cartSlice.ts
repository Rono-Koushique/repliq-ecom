import { Product, CartProduct } from "../../../types/products";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
        // adds a unit to an item
        addOneToCart: (
            state,
            action: PayloadAction<{ product: Product | CartProduct }>
        ) => {
            const existingItem = state.cartProducts.find(
                (cartProduct) => cartProduct.id === action.payload.product.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartProducts.push({
                    ...action.payload.product,
                    quantity: 1,
                });
            }
        },
        // removes a unit from an item
        removeOneFromCart: (
            state,
            action: PayloadAction<{ product: Product | CartProduct }>
        ) => {
            const existingItem = state.cartProducts.find(
                (cartProduct) => cartProduct.id === action.payload.product.id
            );
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.cartProducts = state.cartProducts.filter(
                        (currentProduct) =>
                            currentProduct.id !== action.payload.product.id
                    );
                }
            }
        },
        // update info of an item
        updateInCart: (
            state,
            action: PayloadAction<{
                product: Product | CartProduct;
                updateInfo: { quantity: number };
            }>
        ) => {
            const existingItem = state.cartProducts.find(
                (cartProduct) => cartProduct.id === action.payload.product.id
            );
            if (existingItem) {
                existingItem.quantity = action.payload.updateInfo.quantity;
            } else {
                state.cartProducts.push({
                    ...action.payload.product,
                    quantity: action.payload.updateInfo.quantity,
                });
            }
        },
        // removes an item completely from a cart
        removeFromCart: (
            state,
            action: PayloadAction<{ product: Product | CartProduct }>
        ) => {
            const existingItem = state.cartProducts.find(
                (cartProduct) => cartProduct.id === action.payload.product.id
            );
            if (existingItem) {
                state.cartProducts = state.cartProducts.filter(
                    (currentProduct) =>
                        currentProduct.id !== action.payload.product.id
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
export const { addOneToCart, removeOneFromCart, updateInCart, removeFromCart } =
    CartSlice.actions;
export default CartSlice.reducer;
