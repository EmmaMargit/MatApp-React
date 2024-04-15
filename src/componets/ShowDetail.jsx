import React, { useState, useEffect } from 'react';

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

export default ShowDetail;


