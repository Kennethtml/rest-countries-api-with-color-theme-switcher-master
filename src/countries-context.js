import { createContext } from "react";
import { useState } from "react";

<<<<<<< HEAD
export const CountriesContext = createContext({
  countryData: [],
  setCountryData: () => {},
  region: "Europe",
  theme: null,
  setTheme: () => {},
});

const Light = {
  //   "--Dark-Blue": "hsl(209, 23%, 22%)",
  "--Dark-Blue": "#000",
=======
export const CountriesContext=createContext({
    countryData : [],
    setCountryData: ()=>{},
    region:'Europe',
    theme:null,
     setTheme:()=>{}
})

const Light = {
  " --Dark-Blue": "hsl(209, 23%, 22%)",
>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6
  "--Very-Dark-Blue": "hsl(207, 26%, 17%)",
  "--text-Blue": " hsl(200, 15%, 8%)",
  "--Dark-Gray": " hsl(0, 0%, 52%)",
  "--Very-Light-Gray": "hsl(0, 0%, 98%)",
  "--White": " hsl(0, 0%, 100%)",
<<<<<<< HEAD
=======

  "--ff-Nunito": " 'Nunito Sans', sans-serif",

  //light mode
  "--clr-primary": "var(--Very-Light-Gray)",
  "--clr-secondary": "var(--White)",
  "--box-shadow": "0 .2px  3px var(--Dark-Gray)",
  "--text-clr": "var(--text-Blue)",
};

const Dark = {
  " --Dark-Blue": "hsl(209, 23%, 22%)",
  "--Very-Dark-Blue": "hsl(207, 26%, 17%)",
  "--text-Blue": " hsl(200, 15%, 8%)",
  "--Dark-Gray": " hsl(0, 0%, 52%)",
  "--Very-Light-Gray": "hsl(0, 0%, 98%)",
  "--White": " hsl(0, 0%, 100%)",

  "--ff-Nunito": " 'Nunito Sans', sans-serif",

  //dark mode

  "--clr-secondary": "hsl(209, 23%, 22%)",
  "--clr-primary": "var(--Very-Dark-Blue)",
  "--box-shadow": "0 .2px  3px var(--clr-primary)",
  "--text-clr": "var(--White)",
};

>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6

  "--ff-Nunito": " 'Nunito Sans', sans-serif",

  //light mode
  "--clr-primary": "var(--Very-Light-Gray)",
  "--clr-secondary": "var(--White)",
  "--box-shadow": "0 .2px  3px var(--Dark-Gray)",
  "--text-clr": "var(--text-Blue)",
};

const Dark = {
//   "--Dark-Blue": "hsl(209, 23%, 22%)",
  "--Dark-Blue": "#000",
  "--Very-Dark-Blue": "hsl(207, 26%, 17%)",
  "--text-Blue": " hsl(200, 15%, 8%)",
  "--Dark-Gray": " hsl(0, 0%, 52%)",
  "--Very-Light-Gray": "hsl(0, 0%, 98%)",
  "--White": " hsl(0, 0%, 100%)",

<<<<<<< HEAD
  "--ff-Nunito": " 'Nunito Sans', sans-serif",
=======
      const [countryData, setCountryData] = useState([]);
      const [formInput, setFormInput]=useState("")
        const [region, setRegion] = useState("");
        const [theme, setTheme] = useState(Light);
      const value={countryData,setCountryData, formInput, setFormInput, region, setRegion,theme,setTheme,Dark,Light}
    
>>>>>>> f37121f9fa5998711704ae0fe8762cc119c6f0b6

  //dark mode

  "--clr-secondary": "hsl(209, 23%, 22%)",
  "--clr-primary": "var(--Very-Dark-Blue)",
  "--box-shadow": "0 .2px  3px var(--clr-primary)",
  "--text-clr": "var(--White)",
};

export const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [formInput, setFormInput] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState(Light);
  const value = {
    countryData,
    setCountryData,
    formInput,
    setFormInput,
    region,
    setRegion,
    theme,
    setTheme,
    Dark,
    Light,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
