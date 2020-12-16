import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <h1 className="navbar-logo"><span className="spanwhite">CARL</span>EDWARD</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.class} to={item.url} onClick={closeMenu}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Link to='/contact' onClick={closeMenu}><button className='btn'>Contact Me</button></Link>
        </nav>
    )
}

export default Navbar