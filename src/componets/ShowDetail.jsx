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
        <h3>{recipe.strMeal}</h3>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        {recipeDetails && (
          <div>
            <h4>Detaljerad information:</h4>
            <p>Kategori: {recipeDetails.strCategory}</p>
            <p>Område: {recipeDetails.strArea}</p>
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
  





// function ShowDetail({ recipes }) {
//     const [recipeDetails, setRecipeDetails] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (!recipes || !recipes.length) return; // Om recepten inte är tillgängliga eller tom array, avsluta här
//         setLoading(true); // Sätt laddningsstatus till true när vi börjar hämta detaljer

//         const fetchRecipesDetails = async () => {
//             try {
//                 const promises = recipes.map(recipeId => (
//                     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
//                         .then(response => response.json())
//                 ));
//                 const recipesData = await Promise.all(promises);
//                 setRecipeDetails(recipesData);
//             } catch (error) {
//                 console.error('Error fetching meal details:', error);
//             } finally {
//                 setLoading(false); // Sätt laddningsstatus till false när hämtningen är klar oavsett resultat
//             }
//         };

//         fetchRecipesDetails();

//     }, [recipes]);

//     // Om vi fortfarande hämtar detaljer, visa laddningsindikator
//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     // Om detaljer är tillgängliga, visa dem
//     if (recipeDetails && recipeDetails.length > 0) {
//         return (
//             <div>
//                 {recipeDetails.map((recipeData, index) => (
//                     <div key={index}>
//                         {/* Visa detaljer för varje maträtt */}
//                         <h2>{recipeData.meals[0].strMeal}</h2>
//                         <p>{recipeData.meals[0].strInstructions}</p>
//                         <img src={recipeData.meals[0].strMealThumb} alt={recipeData.meals[0].strMeal} />
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     // Om receptet inte finns, returnera null (inget att skriva ut)
//     return null;
// }

