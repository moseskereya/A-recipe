import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const MyStyles = {
            textDecoration:"none",
        }
        return ( 
            <div className="front-page">
                <div>
             <div>
                 <h3 className="recipe-title">Food recipe</h3>
             </div>
            <div className="subscription">
                <span><button className="btn-1">
                    <Link style={MyStyles} to="/App1">
                            Get started
                     </Link>
                  </button> 
                </span>
                </div> 
                </div>
            </div>
         );
    }
}
 
export default Home;