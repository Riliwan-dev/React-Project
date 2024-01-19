import React, { Component } from 'react';
import {MenuItems} from './menuItems'

class Navbar extends Component{
    render(){
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React<i fab fa-react></i></h1>

            <div className='menu-icon'>

            </div>
        <ul>
            {MenuItems.map((items,index) => {

            <li key={index}>
                <a className={Items.cName} href={items.url}>
                {items.title}
                </a>
            </li>
        })}
        </ul>
        </nav>
    }
}