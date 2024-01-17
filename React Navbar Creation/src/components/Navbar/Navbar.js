import React, { Component } from 'react';
import {MenuItems} from './menuItems'

class Navbar extends Component{
    render(){
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React</h1>

            <div className='menu-icon'>

            </div>
        <ul>
            {MenuItems.map((items,index) => {
                <li className={Items.cName}></li>
        })}
        </ul>
        </nav>
    }
}