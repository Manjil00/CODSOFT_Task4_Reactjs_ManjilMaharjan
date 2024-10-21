import React from 'react'
import Nav from './Nav';
import { Link, useParams } from 'react-router-dom';

import { useSelector , useDispatch } from "react-redux";
import {incrNum, decrNum} from "../actions/index";

import { addToCart } from '../actions/cart';


const Details = () => {

    const {id} = useParams();
    const products=useSelector((state)=>state.products.products);
    const productdetails=products.find((item)=>item.id===parseInt(id));


const mystate= useSelector ((state)=>state.Numchange);
const dispatch= useDispatch();

const handleAddedToCart=()=>{
    
    dispatch(addToCart(product));
};

return (
    <div className="main w-full h-[100vh] bg-appleblack">
    <Nav/>
    
    <div className="details bg-appleblack h-[87vh] w-full p-2 md:p-5 mt-5">
        <div className="productdetails flex justify-evenly items-start">

            <img src={productdetails.image} className='h-[250px] w-[40%] md:h-[500px] md:w-[40%] rounded-xl' alt='img'/>
        
        <div className="description h-auto w-[40%] flex flex-col justify-start items-start gap-5 ">
                <h1 className='font-sans font-bold text-start text-2xl md:text-4xl text-white'>{productdetails.title}</h1>
                <p className='font-sans text-start text-sm md:text-xl text-white'>Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis saepe ipsum, eius exercitationem rem nulla?
                    Delectus explicabo nisi aspernatur, dolorem aliquam fuga praesentium corrup,kj,jhhjjh,h,hj,hj,jh,jh,jh,jh,jh,jhti laboriosamdsfsfdsfdsfdsfds
                    animi minima asperdsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfiores ratione laborum?</p>

                <div className="incrDecr mt-5 bg-green-800 h-[50px] w-[200px] rounded-xl flex justify-between items-center">
                    <button onClick={()=>dispatch(decrNum())}
                    className='h-[50px] w-[50px] rounded-tl-xl rounded-bl-xl  text-white'>-</button>
                    
                    <h1 className='font-bold font-sans text-center'>{mystate}</h1>
                    
                    <button  onClick={()=>dispatch(incrNum())}
                    className='h-[50px] w-[50px] rounded-tr-xl rounded-br-xl text-white '>+</button>

                </div>

        <div className="btns flex justify-evenly items-center gap-6">

    <button onClick={handleAddedToCart}
                className='h-[50px] w-[150px] bg-green-600 rounded-xl mt-5'>Add To Cart</button>
                <button className='h-[50px] w-[150px] bg-green-600 rounded-xl mt-5'>Buy now</button>
        </div>
                </div>
        

        </div>
    </div>

    </div>
)
}

export default Details;
