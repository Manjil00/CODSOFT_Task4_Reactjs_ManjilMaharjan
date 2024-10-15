import React from 'react'

//Components
import Nav from './Nav';

//ICONS
import { FaSearch } from "react-icons/fa";



const Listing = () => {
return (
    <div className='main-container w-full h-auto bg-appleblack'>
    <Nav/>

    <div className="searchabr h-[80px] w-full flex justify-center items-center">
        <input type="text" placeholder="Search for a Product" className="searchabr-input px-5 h-[50px] w-[80%] rounded-tl-xl rounded-bl-xl"/>
        <button 
        className='h-[50px] w-[50px] bg-white rounded-tr-xl rounded-br-xl'><FaSearch /></button>
    </div>

    <div className="productsNav w-full h-auto p-5 mx-4 flex flex-wrap justify-start items-start gap-20">
        <div className="Cardsections1 h-[150px] w-[150px] p-3 md:h-[390px] md:w-[300px] flex flex-col justify-start items-center gap-2 flex-grow-0 flex-shrink-0 rounded-xl bg-white">
            <img src='../images/testpic.jpg' className=' h-[230px] w-[90%] rounded-xl' alt='cardphoto'/>
            <h1 className='font-sans text-sm md:text-xl font-bold'>Test1</h1>
            <h1 className='font-sans text-sm md:text-xl font-semibold'>$ Price</h1>
            <button className='h-[50px] w-[150px] p-2 bg-red-600 rounded-xl text-white'>Show Details</button>
        </div>

        <div className="Cardsections1 h-[150px] w-[150px] p-3 md:h-[390px] md:w-[300px] flex flex-col justify-start items-center gap-2 flex-grow-0 flex-shrink-0 rounded-xl bg-white">
            <img src='../images/testpic.jpg' className=' h-[230px] w-[90%] rounded-xl' alt='cardphoto'/>
            <h1 className='font-sans text-sm md:text-xl font-bold'>Test1</h1>
            <h1 className='font-sans text-sm md:text-xl font-semibold'>$ Price</h1>
            <button className='h-[50px] w-[150px] p-2 bg-red-600 rounded-xl text-white'>Show Details</button>
        </div>

        <div className="Cardsections1 h-[150px] w-[150px] p-3 md:h-[390px] md:w-[300px] flex flex-col justify-start items-center gap-2 flex-grow-0 flex-shrink-0 rounded-xl bg-white">
            <img src='../images/testpic.jpg' className=' h-[230px] w-[90%] rounded-xl' alt='cardphoto'/>
            <h1 className='font-sans text-sm md:text-xl font-bold'>Test1</h1>
            <h1 className='font-sans text-sm md:text-xl font-semibold'>$ Price</h1>
            <button className='h-[50px] w-[150px] p-2 bg-red-600 rounded-xl text-white'>Show Details</button>
        </div>

        <div className="Cardsections1 h-[150px] w-[150px] p-3 md:h-[390px] md:w-[300px] flex flex-col justify-start items-center gap-2 flex-grow-0 flex-shrink-0 rounded-xl bg-white">
            <img src='../images/testpic.jpg' className=' h-[230px] w-[90%] rounded-xl' alt='cardphoto'/>
            <h1 className='font-sans text-sm md:text-xl font-bold'>Test1</h1>
            <h1 className='font-sans text-sm md:text-xl font-semibold'>$ Price</h1>
            <button className='h-[50px] w-[150px] p-2 bg-red-600 rounded-xl text-white'>Show Details</button>
        </div>

        <div className="Cardsections1 h-[150px] w-[150px] p-3 md:h-[390px] md:w-[300px] flex flex-col justify-start items-center gap-2 flex-grow-0 flex-shrink-0 rounded-xl bg-white">
            <img src='../images/testpic.jpg' className=' h-[230px] w-[90%] rounded-xl' alt='cardphoto'/>
            <h1 className='font-sans text-sm md:text-xl font-bold'>Test1</h1>
            <h1 className='font-sans text-sm md:text-xl font-semibold'>$ Price</h1>
            <button className='h-[50px] w-[150px] p-2 bg-red-600 rounded-xl text-white'>Show Details</button>
        </div>
    
    </div>


    </div>
)
}

export default Listing;
