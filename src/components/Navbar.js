import React from 'react'
import MenuItems from './MenuItems'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            clicked: !this.state.clicked
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
                                <a className={item.class} href={item.url}>
                                    {item.title}
                                </a>
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