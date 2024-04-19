import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheet/App.css';
import './stylesheet/InputField.css';
import './stylesheet/Header.module.css';
import './stylesheet/Footer.module.css';
import './stylesheet/ShowDetail.module.css';
import Header from './componets/boilerplats/Header'
import InputField from './componets/InputField';
import MainContent from './componets/boilerplats/MainContent'
import ShowDetail from './componets/ShowDetail'
import ShowDetailPage from './componets/ShowDetailPage';
import Footer from './componets/boilerplats/Footer'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [recipes, setRecipes] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // State för felmeddelandet

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
          setRecipes([]);
          setErrorMessage('Inga recept hittades för den här sökningen'); // Sätt felmeddelande
        } else {
          setRecipes(data.meals);
        }
        setFetching(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setFetching(false);
        setErrorMessage('Något gick fel vid hämtning av recept'); // Sätt felmeddelande
      });
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setErrorMessage(null); // Återställ felmeddelandet när användaren utför en ny sökning
  };

  return (
    <div>
      <Header />
      <InputField onSearch={handleSearch} />
      {errorMessage && <p>{errorMessage}</p>} {/* Visa felmeddelande om det finns */}
      <MainContent>
        <Routes>
          <Route path="/" element={<div className="recipes">
            {recipes && recipes.length > 0 && recipes.map(recipe => (
              <ShowDetail
                key={recipe.idMeal}
                recipe={recipe} 
              />
            ))}
          </div>} />
          <Route path="/recipe/:id" element={<ShowDetailPage />} />
        </Routes>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;