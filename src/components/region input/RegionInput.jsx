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

        <option value="" selected disabled hidden>
          select a region

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