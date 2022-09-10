import React from 'react'
import { useState ,useEffect} from 'react'
import { useContext } from 'react'
import { CountriesContext } from '../countries-context'

const RegionInput = () => {
    const{region,setRegion}=useContext(CountriesContext)

    
    function handleChange(e){
        e.preventDefault()
        setRegion(e.target.value)
        console.log('reegion changed', region)
        
    }   

     
  return (
    <div>
      <select name="region" id="region" onChange={handleChange} value={region}>
        <option value=""></option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
      </select>
    </div>
  );
}

export default RegionInput