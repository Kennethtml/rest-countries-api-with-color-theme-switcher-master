
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const { name, region, population, capital, flags } = country;

  return (
    <div className="country-card">
      <Link to={name.common.toLowerCase()}>
        <img src={flags.png} />

        <div className="country-card-details">
          <h3>{name.official}</h3>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital : </span>
            {capital}
          </p>
        </div>
      </Link>
    </div>
  );
}
