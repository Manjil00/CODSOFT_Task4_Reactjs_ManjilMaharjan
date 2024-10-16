import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 z-50 relative">
    <div className="flex justify-center items-center">
        <h1 className='text-white ml-6  text-sm md:text-4xl font-sans
cursor-pointer flex justify-center items-center'>Product Catalog</h1>

    </div>
    <div className={`absolute min-h-[30vh] left-0 top-[90%] w-full p-5 bg-appleblack text-white flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-sans">
        <li className="hover:text-slate-600">Home</li>
        <li className="hover:text-slate-600">Products</li>
        <li className="hover:text-slate-600">Blogs</li>
        <li className="hover:text-slate-600">About us</li>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;