//Default React library
import React from 'react';

// React Component
//This provide header info and it will be rendered into the App.js
function Header() {
    return (

        //display information inside the div
        <div className='navbar-div'>
            <nav className='navbar navbar-expand-lg'>
                <div className='dropdownMenu'>
                    <a className='navbar-brand header-logo' href='#Home'>iTunes App</a>
                </div>
                <ul className='navbar-nav list-group'>
                    <li className='nav-item'><a href='#Home'>Home</a></li>
                    <li className='nav-item'><a href='#Search'>Search</a></li>
                    <li className='nav-item'><a href='#Favs'>Favourites</a></li>
                    <li className='nav-item'><a href='#Favs'>Developer</a></li>
                </ul>
                </nav>
        </div>
    )
}

export default Header;