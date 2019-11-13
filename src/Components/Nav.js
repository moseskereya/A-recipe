import React, { Component } from 'react';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:new Date()
         }
    }
    render() { 
        return ( 
            <div>
            <nav>
                <div className="header">
                    FOOD RECIPE
                </div>
                <ul>
                  <li>Home</li>
               <li>Recipes {}</li>
                </ul>
                  <div className="hide">
                    <li>+1-08478367</li>
                </div>
            </nav>
        </div>
         );
    }
}
 
export default Nav;