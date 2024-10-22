import { combineReducers } from "redux";
import Numchange from "./incrdecr";
import productReducer from "./productReducer";
// import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    Numchange,
    products: productReducer,
    // cart: cartReducer,
});

export default rootReducer;