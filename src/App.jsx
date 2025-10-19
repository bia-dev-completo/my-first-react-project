import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import { useState, useEffect } from 'react'

function App() {
  // Exemplo do useState
  // const [count, setCount] = useState(0);

  // const handleClick = () => setCount((countAnterior) => countAnterior + 1);

  // useEffect(() => {
  //   console.log("Executou");
  //   console.log("O valor do contador é: ", count);
  // }, [count]);

  return (
    <>
      <div>
        <NavBar/>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ContactPage />
        
        {/* Exemplo do useState */}
        {/* <h1>Vite + React</h1>
        <button onClick={handleClick}>
          count is {count}
        </button> */}
      
      </div>
    </>
  )
}

export default App
