import React from 'react'
import { CountriesContext } from '../../countries-context'
import { useContext } from 'react'

const Navbar = () => {

const{Dark,Light,setTheme,theme}=useContext(CountriesContext)

function toggleDarkMode(){
  setTheme((prev)=>{
    if(prev===Light){
      return Dark
    }
    else{
      return Light
    }

  })
}

  return (
    <div className='Navbar'>
        <h2>Where in the world</h2>
        <span onClick={toggleDarkMode} style={{cursor:"pointer"}}>Dark mode</span>
        
    </div>
  )
}

export default Navbar