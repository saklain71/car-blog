import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" ">
        <ul className="flex justify-center bg-orange-300 gap-5 p-6  text-white">
            <Link className="hover:text-red-500" to="/"  >HOME</Link>
            <Link className="hover:text-red-500" to='/reviews'>REVIEWS</Link>
            <Link className="hover:text-red-500" to='/dashboard'>DASHBOARD</Link>
            <Link className="hover:text-red-500" to='/blogs'>BLOGS</Link>
            <Link className="hover:text-red-500" to='/about'>ABOUT</Link>
        </ul>
    </div>
       
    );
};

export default Navbar;