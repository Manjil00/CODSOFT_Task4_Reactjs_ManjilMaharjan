import { SET_PRODUCTS } from "../actions/product";

const initialstate={
    products:[],
};

const productReducer=(state=initialstate,action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
            };
        default: return state;
    }
}

export default productReducer;