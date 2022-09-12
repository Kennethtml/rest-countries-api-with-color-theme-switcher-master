import React from "react";
import styled from "styled-components";
import{ useNavigate} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const CountryDetails = ({ country }) => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    flags,
    currencies,
    languages,
    borders,
    nativeName,
    topLevelDomain,
  } = country;

const navigate=useNavigate();
    const goToHome=()=>{
        navigate('/')
    }

  return (
    <div>
      <Heading>
        <button onClick={goToHome}>
          <span>
            <FaArrowLeft className="arrow-icon" />
          </span>
          <span>back</span>
        </button>
      </Heading>
      <Countrymain>
        <div className="flag">
          <img src={flags.png} alt="" />
        </div>
        <div className="about">
          <div className="primary-about">
            <h2>{name}</h2>
            <p>
              Name : <span>  {nativeName}</span>
            </p>
            <p>
              Population : <span>{population} </span>
            </p>
            <p>
              Region : <span>{region} </span>
            </p>
            <p>
              Sub Region : <span>{subregion} </span>
            </p>
            <p>
              Capital: <span> {capital}</span>
            </p>
          </div>
          <div className="secondary-about">
            <p>
              Top Level Domain: <span>{topLevelDomain} </span>
            </p>
            <p>
              Currencies : <span>{currencies[0].code} </span>
            </p>
            <p>
              Language : <span>{languages[0].name} </span>
            </p>
          </div>
          <div className="border">
            <p>Border Countries</p>

            <div className="border-nav">

            {borders &&
              borders.map((border) => {
                return <button key={border}>{border}</button>;
              })}
            </div>

          </div>
        </div>
      </Countrymain>
    </div>
  );
};
const Countrymain = styled.div`
  --bd-padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: var(--bd-padding);
  gap: 70px;

  @media (max-width: 1000px) {
    --bd-padding: 20px;
    flex-direction: column;
  }

  .about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    grid-template-rows: max-content min-content;
    grid-auto-flow: dense;
    align-items: center;
    flex: 1;

    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }
    p {
      font-size: 1rem;
      margin-bottom: 10px;
      font-weight: 500;
    }
    p span {
      font-weight: 300;
      color: grey;
      margin-left: 7px;
    }
    .border-nav {
      display: flex;
      justify-content:space-between;
      gap:20px;
    }
    button {
      padding: 5px 20px;
      outline: none;
      border: none;
      box-shadow: var(--box-shadow);
      background-color: var(--clr-secondary);
      color: var(--text);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      // border:1px solid red;
      width: 100%;
    }
  }

  .flag {
    flex: 1;
    @media (max-width: 900px) {
      width: 100%;
    }
    img {
      width: 80%;
      height: 100%;
      object-fit: cover;

      @media (max-width: 1000px) {
        width: 100%;
      }
    }
  }
  p {
    font-weight: 600;
  }

  p {
    font-weight: 300;
  }
`;

const CountryDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  margin: 30px 0;
//  padding:var(--bd-padding);

  button {
    padding: 10px 30px;
    outline: none;
    border: none;
    box-shadow: var(--box-shadow);
    background-color: var(--clr-secondary);
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap:10px;

    .arrow-icon{
      transform:translateY(20%);
    }
    
  }
`;

export default CountryDetails;
