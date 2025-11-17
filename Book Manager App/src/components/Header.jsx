import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from "../assets/logo.png";
import userImg from "../assets/user.png";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
        {/* LOGO */}
        <div className="flex flex-1">
            <Link to={"/"} className='bold-22 xl:bold-28 flex items-end gap-1'>
            <img src={logoImg} alt="" className="hidden sm:block"/>
            <div className="sm:relative top-1 5">Zibook<span className="text-secondary">a.</span></div>
            </Link>
        </div>
        {/* NAVBAR FOR MOBILE & DESKTOP */}
        <div className="flex-1">
            <Navbar />
        </div>
    </header>
  )
}

export default Header