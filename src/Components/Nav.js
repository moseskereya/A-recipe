import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:new Date()
         }
    }
    render() { 
        const NavStyles = {
            color: "white",
            textDecoration:"none"
        }
        return ( 
            <div>
            <nav>
                <div className="header">
                    FOOD RECIPE
                </div>
                <ul>
                 <Link style={NavStyles} to = '/'>
                    <li>Home</li>
                    </Link>
                    <Link  style={NavStyles} to = '/App1'>
                     <li>About</li>
                    </Link>
                </ul>
                  <div className="hide">
                    <li>+1-08478367</li>
                    {/* {this.state.time.toLocaleDateString()} */}
                </div>
            </nav>
        </div>
         );
    }
}
 
export default Nav;