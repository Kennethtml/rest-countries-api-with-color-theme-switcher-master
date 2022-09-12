import React from 'react'
// import CountryCard from '../Country-card'
import CountryList from '../countryList/countryList'
import SearchInput from '../search input/SearchInput'
import RegionInput from '../region input/RegionInput'
import './home.scss'



const Home = () => {
  return (
    <>
      <div className="navigations">
        <SearchInput />
        <RegionInput />
      </div>
      <CountryList />
    </>
  );
}

export default Home
