import React from 'react'
import { useContext } from 'react'
import { CountriesContext } from '../../countries-context'
import { FaSearch } from "react-icons/fa";
;

const SearchInput = () => {
    const{formInput, setFormInput}= useContext(CountriesContext)

const onChangeHandler=(e)=>{
    setFormInput(e.target.value)
  
}

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        onChange={onChangeHandler}
        value={formInput}
      />
      <FaSearch className="search-icon" />
    </div>
  );
}

export default SearchInput