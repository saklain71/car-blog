import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" ">
        <ul className="flex justify-center bg-slate-300 gap-5 ">
            <Link to="/"  >HOME</Link>
            <Link to='/reviews'>REVIEWS</Link>
            <Link to='/dashboard'>DASHBOARD</Link>
            <Link to='/blogs'>BLOGS</Link>
            <Link to='/about'>ABOUT</Link>
        </ul>
    </div>
       
    );
};

export default Navbar;