import React from 'react'
import { Link } from 'react-router-dom'
import { MdCancel } from "react-icons/md";
const Navlink = ({ setNav }) => {
    return (
        <div 
        className="absolute top-14 right-2 z-10 flex flex-col  px-10 py-5  bg-blue-200/100 rounded-md text-sky-600 transition-all ease-in-out ">
            {/* <div onClick={() =>setNav()} className=" absolute right-2 top-2  cursor-pointer hover:text-white"><MdCancel className="text-2xl"/></div> */}
            <Link to='/blog' className='cursor-pointer text-md mb-2 mt-5 hover:text-white transition-all ease-in-out'>Blogs</Link>
            <Link to='/login' className='cursor-pointer text-md mb-2 hover:text-white transition-all ease-in-out'>Login</Link>
            <Link to='/profile' className='cursor-pointer text-md mb-2 hover:text-white transition-all ease-in-out'>Profile</Link>
            <Link to='/Signup' className='cursor-pointer text-md mb-2 hover:text-white transition-all ease-in-out'>Sign Up</Link>
            <Link to='/Logout' className='cursor-pointer text-md hover:text-white transition-all ease-in-out'>Logout</Link>
            </div>
    )
}

export default Navlink