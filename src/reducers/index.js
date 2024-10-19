import { combineReducers } from "redux";
import Numchange from "./incrdecr";
import productReducer from "./productReducer";

const rootReducer = combineReducers({Numchange,
    products: productReducer});

export default rootReducer;