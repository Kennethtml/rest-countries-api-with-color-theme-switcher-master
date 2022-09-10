import React from 'react'
import { useContext } from 'react'
import { CountriesContext } from '../countries-context'

const SearchInput = () => {
    const{formInput, setFormInput}= useContext(CountriesContext)

const onChangeHandler=(e)=>{
    setFormInput(e.target.value)
    console.log(formInput)
}

  return (
    <input
    className='search-input'
    type="text"
    placeholder='Search for a country...'
    onChange={onChangeHandler}
    value={formInput}
    />
  )
}

export default SearchInput