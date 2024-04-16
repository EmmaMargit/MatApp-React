import React, { useState, useEffect } from 'react';

const ShowDetail = ({ recipe }) => {
    const [recipeDetails, setRecipeDetails] = useState(null);
  
    useEffect(() => {
      const fetchRecipeDetails = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
          if (!response.ok) {
            throw new Error('Något gick fel vid hämtning av detaljerad receptinformation');
          }
          const data = await response.json();
          setRecipeDetails(data.meals[0]);
        } catch (error) {
          console.error('Error fetching recipe details:', error);
        }
      };
  
      fetchRecipeDetails();
    }, [recipe.idMeal]);
  
    return (
      <div className="recipe-details">
       
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        {recipeDetails && (
          <div>
            <h3>{recipe.strMeal}</h3> {/* Maträtt */}
            <h4>Ingredienser:</h4>
            <ul>
              {Object.keys(recipeDetails).map(key => {
                if (key.includes('Ingredient') && recipeDetails[key] && recipeDetails[`strMeasure${key.split('Ingredient')[1]}`]) {
                  return (
                    <li key={key}>{recipeDetails[`strMeasure${key.split('Ingredient')[1]}`]} {recipeDetails[key]}</li>
                  );
                }
                return null;
              })}
            </ul>
            <h4>Instruktioner:</h4>
            <p>{recipeDetails.strInstructions}</p>
          </div>
        )}
      </div>
    );
};
  
export default ShowDetail;
  





