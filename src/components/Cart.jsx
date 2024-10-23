import React from 'react';
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrNum, incrNum } from "../actions/index";
import {removeFromCart} from '../actions/cart';
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price

    return (
        <div className='main w-full h-[800px] bg-appleblack'>
            <Nav/>
            <div className="total h-[100px] w-full mt-5 flex justify-start items-center ">
                <h1 className=' font-sans font-semibold ml-20 text-sm md:text-3xl text-white'>Total Price: $ {totalPrice.toFixed(2)}</h1>
                <button className='h-[50px] w-[100px] ml-10 bg-blue-600 rounded-xl font-sans font-semibold text-white'>Checkout</button>
            </div>

            <div className="cartSection p-5 mt-5">
                {cartItems.map((item) => (
                    <div key={item.id} className="product1 h-auto w-full bg-slate-300 flex flex-col md:flex-row justify-evenly items-center rounded-xl">
                        <div className="picDesc flex justify-between items-center p-2">
                            <img src={item.image} className='h-[100px] w-[250px]' alt='productimg'/>
                            <h1 className='text-black text-start md:font-semibold font-sans text-xl md:text-2xl break-words ml-5'>{item.title}</h1>
                        </div>
                        <div className="qtyprice w-full flex justify-evenly items-center mt-3">
                            <div className="qty flex justify-center items-center bg-blue-600 gap-4 rounded-lg p-2">
                                <button onClick={() => item.quantity > 1 ? dispatch(decrNum(item.id)) : dispatch(removeFromCart(item.id))} className='bg-blue-600 rounded-xl text-white p-1'>-</button>
                                <p className='text-black font-sans md:font-semibold text-sm md:text-xl'>Quantity: {item.quantity}</p>
                                <button onClick={() => dispatch(incrNum(item.id))} className='bg-blue-600 rounded-xl text-white p-1'>+</button>
                            </div>
                            <h2 className='text-black md:font-semibold font-sans text-xl md:text-2xl'>${(item.price * item.quantity).toFixed(2)}</h2>
                            <button onClick={() => dispatch(removeFromCart(item.id))} className='h-[50px] w-[50px]'><RiDeleteBin5Line/></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
