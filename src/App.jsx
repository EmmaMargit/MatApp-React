import { useState, useEffect } from 'react'
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
// Här vill du hämta data från MealDB API via fetch.
// Du måste skicka datat till child via props.
  const [recipes, setRecipes] = useState([]); // Skapar en variabel som är satt  tom array
  const [fetching, setFetching] = useState(true); // Skapar variabel som är satt till true 


  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.current.value}')
      .then(response => response.json())
      .then(data => {
        setRecipes(data.meals);
        setFetching(false);
      })
      // Är denna rätt??: 
      .catch(error => {
        console.error('Error fetching data:', error);
        setFetching(false);
      });
    }, []);

    // Definiera handleSearch-funktionen här
    const handleSearch = (searchTerm) => {
    // Implementera logik för sökning här
      console.log('Söker efter:', searchTerm);
    };
  

  return (
    <div>
     <Header />
     {/* Input kommer flyttas till headern */}
     {/* Skicka med handleSearch-funktionen som en prop till InputField */}
     <InputField onSearch={handleSearch}/>
     <MainContent />
     {/* Ska lägga in <ShowDetail /> i  <MainContent /> */}
     <ShowDetail />
     <Footer />
    </div>
  )
}

export default App;
