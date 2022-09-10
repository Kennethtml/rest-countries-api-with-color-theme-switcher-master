import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../countries-context";
import CountryDetails from "./CountryDetails";

const CountryPage = () => {
  const countryCategory = useParams();
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${countryCategory.country}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => setSelectedCountry(data))
      .catch((err) => console.log("Error:", err));
  }, [countryCategory.country]);

 

  console.log(selectedCountry);

  return (
    <div>
      {selectedCountry.map((country) => {
        return <CountryDetails country={country} key={country} />;
      })}
    </div>
  );
};

export default CountryPage;
