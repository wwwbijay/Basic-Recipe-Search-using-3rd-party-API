import React from 'react';

const Recipe = ({ title, image, src, calories, ingredients }) => {
    return (
        <div className="recipe_item">
            <h2><a href={src}>{title}</a></h2>
            <img src={image} alt={title} />
            <p>
                {calories}
            </p>
            <h3>Ingedrients</h3>
            <ul>
                {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}

            </ul>

        </div>
    );
}

export default Recipe;