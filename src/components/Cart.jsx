import React from 'react';
import Nav from "./Nav";
//ICONS
import { RiDeleteBin5Line } from "react-icons/ri";

import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems=useSelector((state)=>state.cart.cartItems);

return (
    <div className='main w-full h-[800px] bg-appleblack'>
    <Nav/>

    <div className="cartSection p-5">
    {
    cartItems.length === 0 ?
    <h1>Empty Cart</h1> :
    cartItems.map((item) => (
        <div key={item.id} className="product1 h-[150px] w-full bg-slate-300 flex justify-evenly items-center rounded-xl">
            <img src={item.image} className='h-[150px] w-[150px]' alt='productimg'/>
            <h1 className='text-black font-semibold font-sans text-xl md:text-2xl'>{item.title}</h1>
            <p className='text-black font-sans text-sm md:text-xl'>Quantity: 10</p>
            <button className='h-[100px] w-[100px]'><RiDeleteBin5Line /></button>
        </div>
    ))
}
    
    </div>

    </div>
)
}

export default Cart;
