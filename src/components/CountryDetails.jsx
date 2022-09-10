import React from "react";
import styled from "styled-components";
import{ useNavigate} from 'react-router-dom'

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
      <header>
        <button onClick={goToHome}> back</button>
      </header>
      <Countrymain>
        <div className="flag">
          <img src={flags.png} alt="" />
        </div>
        <div className="about">
          <div className="primary-about">
            <h2>{name}</h2>
            <p>
              Name : <span>{nativeName}</span>
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

            {borders &&
              borders.map((border) => {
                return <button key={border}>{border}</button>;
              })}
          </div>
        </div>
      </Countrymain>
    </div>
  );
};
const Countrymain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .about {
    // flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    grid-template-rows: max-content min-content;
    grid-auto-flow: dense;
    align-items: center;
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

export default CountryDetails;
