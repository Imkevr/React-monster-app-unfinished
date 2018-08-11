import React from 'react';

import { Link } from "react-router-dom";

const API_KEY = "bd77a30d7d7a63ea21198f0dddc34546";

class Recipe extends React.Component{
    state = {
        activeRecipe: []
    }
    componentDidMount =  async () =>{
        const title = this.props.location.state.recipe;
        const request = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const result = await request.json();
     
        this.setState({ activeRecipe: result.recipe[0] });
       console.log(result.recipes[0]);

    }
    render(){
        const recipe = this.state.activeRecipe;
        return(
           <div className="container">
                { this.state.activeRecipe.length !== 0 &&

                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                        <h3 className="active-recipe__title">{recipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                             Publisher: <span> {recipe.publisher} </span>
                        </h4>
                        <p className="active-recipe__website">
                            Website:
                            <span>
                                <a href={recipe.publisher_url}>
                                    {recipe.publisher_url}
                                </a> 
                            </span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">
                                Take me back
                            </Link>
                        </button >
                    </div>
                }
           </div>
        );
    }
};


export default Recipe;