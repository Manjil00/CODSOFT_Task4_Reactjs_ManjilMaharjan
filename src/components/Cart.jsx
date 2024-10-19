import React from 'react';
import Nav from "./Nav";
//ICONS
import { RiDeleteBin5Line } from "react-icons/ri";

import { useSelector , useDispatch } from "react-redux";
// import {incrNum, decrNum} from "../actions/index";


const Cart = () => {
    
    const {id} = useParams();
    const products=useSelector((state)=>state.products.products);
    const productdetails=products.find((item)=>item.id===parseInt(id));

// const mystate= useSelector ((state)=>state.Numchange);
// const dispatch= useDispatch();

return (
    <div className='main w-full h-[800px] bg-appleblack'>
    <Nav/>

    <div className="cartSection p-5">
        
        <div className="product1 h-[150px] w-full bg-slate-300 flex justify-evenly items-center rounded-xl">
            <img src='../images/testpic.jpg' className='h-[150px] w-[150px]' alt='productimg'/>
            <h1 className='text-black font-semibold font-sans text-xl md:text-2xl'>Insta 360 X3 Camera</h1>
            <p className='text-black font-sans text-sm md:text-xl'> Quantity: 10</p>
            <button className='h-[100px] w-[100px]'><RiDeleteBin5Line /></button>
        </div>

    </div>

    </div>
)
}

export default Cart;
