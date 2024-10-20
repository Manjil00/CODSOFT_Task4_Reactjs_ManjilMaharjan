const initialstate={
    cartitems:[],
};

const cartReducer =(state=initialstate,action)=>{
    switch (action.type){
        case ADD_TO_CART : 
        return{
            ...state,
            cartitems: [...state.cartitems,action.payload]
        };
        default: return state;
    };
};

export default cartReducer;