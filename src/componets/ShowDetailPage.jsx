import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function ShowDetailPage() {

    return (
        <div>

        </div>
    )
}

export default ShowDetailPage; 


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import RecipeDetailsPage from './components/RecipeDetailsPage';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/recipe/:id" component={RecipeDetailsPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }


// import { Link } from 'react-router-dom';

// const ShowDetail = ({ recipe }) => {
//   return (
//     <div className="recipe">
//       <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//       <h3>{recipe.strMeal}</h3>
//       <Link to={`/recipe/${recipe.idMeal}`}>Visa detaljer</Link>
//     </div>
//   );
// };

// export default ShowDetail;