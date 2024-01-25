/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {FaAngleDown,FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
const NavbarComponent = () => {
    const [showNav, setShowNav] = useState(false);
    const toggleResponsive = () => {
        setShowNav(!showNav);
    };
    return (
        <div style={{ background: "linear-gradient(#ffffff, #555555)",width:"100%",height:"100vh" }}>
            <div className={`navbar ${showNav ? 'show' : ''}`}>
            <div style={{display:"flex",width:"100%"}}>
            <a className="navbar-brand" href="#">Logo</a>
            <label for="navbar-toggler" className="navbar-toggler-icon" onClick={toggleResponsive}>{showNav?<MdClose/>:<FaBars/>}</label>
            </div>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">About</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link nav-dropdown"href="#">Dropdown <FaAngleDown/></a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">sub1</a></li>
                <li><a className="dropdown-item" href="#">sub2</a></li>
                <li><a className="dropdown-item" href="#">sub3</a></li>
                <li><a className="dropdown-item" href="#">sub4</a></li>
            </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link">Contact</a>
            </li>
        </ul>
        </div>
        </div>
    )
}

export default NavbarComponent