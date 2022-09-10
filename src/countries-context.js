import {createContext } from "react";
import { useState } from "react";

export const CountriesContext=createContext({
    countryData : [],
    setCountryData: ()=>{},
    region:'Europe'
})




export const CountryProvider=({children})=>{

      const [countryData, setCountryData] = useState([]);
      const [formInput, setFormInput]=useState("")
        const [region, setRegion] = useState("");
      const value={countryData,setCountryData, formInput, setFormInput, region, setRegion}
    

    return(
        <CountriesContext.Provider value={value}>
            {children}
        </CountriesContext.Provider>
    )

}