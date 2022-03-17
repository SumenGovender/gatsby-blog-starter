import * as React from "react"
import { MenuItems } from "./menu-items"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">
                    Wild Animals <sup>TM</sup>          
                </h1>
                <ul className="navbar-list">
                        
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className="navbar-list-text" className={item.cName} href="item.url">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>            
            </nav>
        )
    }
}

export default Navbar