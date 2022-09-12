import { useContext,useState,useEffect } from "react";
import { CountriesContext } from "../../countries-context";
import CountryCard from "../Country-card/Country-card";

const CountryList = () => {
  const { countryData,formInput,region} = useContext(CountriesContext);

const [ Filtered, setFiltered ] = useState([]);


   useEffect(()=>{

    setFiltered( countryData.filter((country)=>{

      const countryName = country.name.official || country.name
      
       return countryName
         .toLowerCase()
         .includes(formInput.toLowerCase());
    }))

   },[countryData,formInput,region])


 
   
   
   console.log(Filtered,"filtered")


  return (
    <div className="country-cards">
      {Filtered && Filtered.map((country) => {
        return <CountryCard key={country.name.official} country={country} />;
      })}
    </div>
  );
};

export default CountryList;
