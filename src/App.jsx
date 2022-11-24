import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponenteContainer from './components/NavBar/pages/ComponenteContainer/ComponenteContainer'
import { Titulo } from './components/NavBar/Titulo/Titulo'

function App() {

  return (
    <>     
        <ComponenteContainer 
          greeting={'saludo'}           
        >
          <Titulo />

        </ComponenteContainer>
    </>
      
  )
}

export default App