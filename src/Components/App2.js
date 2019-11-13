import React, { Component } from 'react';
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        show:false
         }
    }
    showdetails = () =>{
        this.setState({
            show:!this.state.show 
        })
    }
    render() { 
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
                        className="details-btn" onClick={this.showdetails}>View More</button>
                        {this.state.show && <span onClick={this.state.show}>{recipe.source_url.length < 15 ? `${recipe.source_url}` : `${recipe.source_url.substring(0, 20)}...`}</span> }
                    
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
