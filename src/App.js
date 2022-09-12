import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home.jsx/home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState, useContext } from "react";
import { CountriesContext } from "./countries-context";
import { Routes, Route } from "react-router-dom";
import CountryPage from "./components/CountryPage/CountryPage";

function App() {
<<<<<<< HEAD
=======

>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6
  const { countryData, setCountryData, region, setRegion, theme } =
    useContext(CountriesContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((err) => console.log("Error:", err));

    console.log("just mounted");
  }, []);

<<<<<<< HEAD
=======


>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6
  useEffect(() => {
    if (region !== "") {
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => setCountryData(data))
        .catch((err) => console.log("Error:", err));
      console.log(region, "i ran");
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountryData(data))
        .catch((err) => console.log("Error:", err));
    }
  }, [region]);

<<<<<<< HEAD
=======
  

>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6
  return (
    <>
      <div className="container" style={theme}>
        <Navbar />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country" element={<CountryPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
