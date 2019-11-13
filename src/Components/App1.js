import React, { Component } from 'react';
import App2 from "./App2"
import axios from "axios"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes:[]
         }
    }

    SearchRecipe = (e) =>{
        e.preventDefault()
        const RecipeName = e.target.elements.RecipeName.value;
        const APP_KEY = "83d6b953a47c3435d14f168f3e4d0e4e"
        axios.get(`https://www.food2fork.com/api/search?key=${APP_KEY}&q=${RecipeName}&count=100`
        )
        .then(Response => {
            console.log(Response.data.recipes)
            this.setState({
                recipes:Response.data.recipes
            })
        })
        .catch(Error => {
            console.log(Error)
        })
    }
    
    render() { 
        return (
            <div>
                <form className="form" onSubmit={this.SearchRecipe}>
                    <input type="text" name="RecipeName"/>
                    <button type="submit">search</button>
                </form>
                <App2 recipe={this.state.recipes}/>
            </div>
         );
    }
}
 
export default App1;