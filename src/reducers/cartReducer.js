import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../actions/cart';

const initialState = {
cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_TO_CART:
    const item = action.payload;
    const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
        return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
        };
    } else {
        return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
    }

    case REMOVE_FROM_CART:
    return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload),
    };

    case UPDATE_CART_ITEM_QUANTITY:
    return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id
            ? { ...cartItem, quantity: action.payload.quantity }
            : cartItem
        ),
    };

    default:
    return state;
}
};

export default cartReducer;