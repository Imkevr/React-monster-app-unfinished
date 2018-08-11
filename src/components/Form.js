import React from 'react';

const Form = props /*= property of object*/ =>(

    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="recipeName"/>
       
        <button className="form__button" >Search for recipes</button>

    </form>

);

export default Form;