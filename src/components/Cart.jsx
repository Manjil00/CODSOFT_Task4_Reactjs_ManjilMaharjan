import React from 'react';
import Nav from "./Nav";

import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
return (
    <div className='main w-full h-[800px] bg-appleblack'>
    <Nav/>

    <div className="cartSection p-5">
        
        <div className="product1 h-[150px] w-full bg-green-500 flex justify-evenly items-center">
            <img src='../images/testpic.jpg' className='h-[150px] w-[150px]' alt='productimg'/>
            <h1 className='text-white font-semibold font-sans text-xl md:text-2xl'>Insta 360 X3 Camera</h1>
            <p className='text-white font-sans text-sm md:text-xl'> Quantity: 10</p>
            <button className='h-[100px] w-[100px]'><RiDeleteBin5Line /></button>
        </div>

    </div>

    </div>
)
}

export default Cart;
