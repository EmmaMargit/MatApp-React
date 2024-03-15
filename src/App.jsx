import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheet/App.css';
import './stylesheet/InputField.css';
import './stylesheet/Header.module.css';
import Header from './componets/boilerplats/Header.jsx'
import SearchInput from './componets/InputField'
import MainContent from './componets/boilerplats/MainContent'
import ShowDetail from './componets/ShowDetail'
import Footer from './componets/boilerplats/Footer'

function App() {

  return (
    <div>
     <Header />
    </div>
  )
}

export default App;
