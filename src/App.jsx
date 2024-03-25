import { useState } from 'react'
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
  return (
    <div>
     <Header />
     {/* Input kommer flyttas till headern */}
     <InputField />
     <MainContent />
     <Footer />
    </div>
  )
}

export default App;
