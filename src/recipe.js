import React from 'react';
import style from './recipe.css'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
    
        {ingredients.map(ingredient => (
          <div className ="list-group-item list-group-item-action list-group-item-danger">

            <li>{ingredient.text}</li>

          </div>
          
        ))}
<div  className = "btn btn-danger">
Calories: <span class="badge badge-light">{calories}</span>
</div>
    
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;

