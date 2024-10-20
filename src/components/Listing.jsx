import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
//Components
import Nav from './Nav';

//ICONS
import { FaSearch } from "react-icons/fa";


import { setProducts } from '../actions/product';

const Listing = () => {

    const [data, setData]=useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchApi= async ()=>{
            try{
                const res= await fetch('https://fakestoreapi.com/products?limit=10');
                const Apidata= await res.json();
                setData(Apidata);
                dispatch(setProducts(Apidata));

            }catch(err){
                console.log(err);
            }
        };
        fetchApi();
    },[dispatch])

return (
    <div className='main-container w-full h-auto bg-appleblack'>
    <Nav/>

    <div className="searchabr h-[80px] w-full flex justify-center items-center">
        <input type="text" placeholder="Search for a Product" className="searchabr-input px-5 h-[50px] w-[80%] rounded-tl-xl rounded-bl-xl"/>
        <button className='h-[50px] w-[50px] bg-white rounded-tr-xl rounded-br-xl'><FaSearch /></button>
    </div>

    <div className="productsNav w-full h-auto p-5 mx-4 flex flex-wrap justify-start items-start gap-20">

        {
            data.map((item)=>{
                const{id, price, title,image}=item;
                return(
                    <div key={id}
                    className="Cardsections1 h-auto w-[250px] p-3 md:h-auto md:w-[300px] flex flex-col justify-between items-center gap-2 flex-grow-0 flex-shrink-0 rounded-xl bg-white">
                    <img src={image} className=' h-[150px] md:h-[200px] w-[90%] rounded-xl' alt='cardphoto'/>
                    <h1 className='font-sans text-sm md:text-xl font-semibold'>{title}</h1>
                    <h1 className='font-sans text-sm md:text-xl font-semibold'>$ {price}</h1>
                    <Link to={`/details/${id}`}><button
                    className='h-[50px] w-[150px] p-2 bg-red-600 rounded-xl text-white'>Show Details</button></Link>
                </div>
                )
            })
        }
    </div>
    </div>
)
}

export default Listing;
