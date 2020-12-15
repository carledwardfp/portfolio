import React from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            click: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }
    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    closeMenu() {
        this.setState({
            click: this.state.click
        })
    }

    render () {
        return (
            <nav className="navbar">
                <h1 className="navbar-logo"><span className="spanwhite">CARL</span>EDWARD</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.class} to={item.url} onClick={this.closeMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <a href='/portfolio/contact'><button className='btn'>Contact Me</button></a>
            </nav>
        )
    }
}
export default Navbar