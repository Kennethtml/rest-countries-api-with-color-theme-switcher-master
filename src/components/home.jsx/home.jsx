import React from 'react'
// import CountryCard from '../Country-card'
import CountryList from './countryList'
import SearchInput from '../SearchInput'
import RegionInput from '../RegionInput'



const Home = () => {
  return (
    <div>
      <div className="navigations">
        <SearchInput />
        <RegionInput />
      </div>
      <CountryList />
    </div>
  );
}

export default Home
