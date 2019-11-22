import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Axios from "axios"
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active:[]
         }
    }
    componentDidMount = () => {
        const key = this.props.location.state
        const APP_KEY = "83d6b953a47c3435d14f168f3e4d0e4e"
        Axios.get(`https://www.food2fork.com/api/search?key=${APP_KEY}&q=${key}`)
        .then(response => {
            this.setState({
                active:response.data.recipes
            })
            console.log(this.state.active)
        })
        .catch(Error => {
            console.log(Error)
        })
    }
    
    render() { 
        const items = this.state.active
        const MyStyles = {
            textDecoration:"none",
            color:"#171717"
        }
        return ( 
            <div className="container">
                {items.map((item) => {
                    return(
                <div className="main-1" key={item.recipe_id}>
                      <img src={item.image_url} alt={item.title}/>
                      <h4>{item.title}</h4>
                      <span className="title">Publisher : {item.publisher}</span>
                      <p>{item.f2f_url}</p>
                        <p>Publisher link:{item.publisher_url}</p>
                       <p style={{color:'rgb(255, 102, 0)'}}>id:{item.recipe_id}</p>
                      <button className="details-btn">
                     <Link style={MyStyles} to="/">
                       Go Home
                     </Link>
                </button>
             </div>
                    )
                })}
         
        </div>
         );
    }
}
 
export default Data;