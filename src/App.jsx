import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheet/App.css';
import './stylesheet/InputField.css';
import './stylesheet/Header.module.css';
import './stylesheet/Footer.module.css';
import Header from './componets/boilerplats/Header'
import MainContent from './componets/boilerplats/MainContent'
import ShowDetail from './componets/ShowDetail'
import Footer from './componets/boilerplats/Footer'
import InputField from './componets/InputField';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.trim() === '') return;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av data');
        }
        return response.json();
      })
      .then(data => {
        if (!data.meals) {
          console.log("Inga recept hittades för den här sökningen");
          setRecipes([]);
        } else {
          console.log("Recept hittades:", data.meals);
          setRecipes(data.meals);
        }
        setFetching(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setFetching(false);
      });
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header />
      <InputField onSearch={handleSearch} />
      <MainContent>
        <div className="recipes">
          {recipes && recipes.length > 0 && recipes.map(recipe => (
            <ShowDetail
              key={recipe.idMeal}
              recipe={recipe} 
            />
          ))}
        </div>
      </MainContent>
      <Footer />
    </div>
  );
  
}

export default App;


// return (
//   <div>
//     <Header />
//     <InputField onSearch={handleSearch} />
//     {fetching ? <p>Loading...</p> : (
//       <MainContent>
//         {/* <ShowDetail recipes={recipes} /> */}
//       </MainContent>
//     )}
//     <Footer />
//   </div>
// );