import React, { Component } from 'react';


import {Link} from  "react-router-dom"
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        show:false
         }
    }
    render() { 
        const MyStyles = {
            textDecoration:"none",
            color:"#171717"
        }
        return ( 
            <div className="container">
            {this.props.recipe.map((recipe) => {
             return(
               <div key={recipe.recipe_id}>
                   <div className="main">
                     <img src={recipe.image_url} alt="recipes"/> 
                      <h5 className="title">{recipe.title}</h5>   
                       <p>Publisher: <span>{recipe.publisher}</span></p>

                        <button 
                          className="details-btn">
                            <Link style={MyStyles} to={{pathname: `/App2/${recipe.recipe_id}`,
                                  state:recipe.title
                                }}>
                               View More
                            </Link>
                        </button>
                   </div>
            </div>
           )
       })}
           </div>
         );
    }
}
 
export default App2;





















// import React from 'react'
// const App2 = props => {
//     return (
//      <div className="container">
//          {props.recipe.map((recipe) => {
//           return(
//             <div key={recipe.recipe_id}>
//                 <div className="main">
//                   <img src={recipe.image_url} alt="recipes"/> 
//                    <h5 className="title">{recipe.title}</h5>   
//                     <p>Publisher: <span>{recipe.publisher}</span></p>
//                      <button className="details-btn" onClick={this.showdetails}>View More</button>
//                 </div>
//          </div>
//         )
//     })}
//         </div>
//     )
// }

// export default App2
