import React from 'react'
import { useState ,useEffect} from 'react'
import { useContext } from 'react'
import { CountriesContext } from '../../countries-context'

const RegionInput = () => {
    const{region,setRegion}=useContext(CountriesContext)

    
    function handleChange(e){
        e.preventDefault()
        setRegion(e.target.value)
        console.log('reegion changed', region)
        
    }   

     
  return (
    <div className='select-input-container'>
      
      <select
        name="region"
        id="region"
        className="select-input"
        onChange={handleChange}
        value={region}
      >
<<<<<<< HEAD:src/components/region input/RegionInput.jsx
        <option value=""  selected>
=======
        <option value="" selected disabled hidden>
>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6:src/components/RegionInput.jsx
          Filter by region
        </option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="">All</option>
      </select>
    </div>
  );
}

export default RegionInput