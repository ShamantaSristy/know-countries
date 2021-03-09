import React, { useEffect, useState } from 'react';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./CountryDetails.css";


const CountryDetails = () => {
    const { alpha2Code } = useParams();
    const [countryDetails, setCountryDetails] = useState({});
    const {name, capital, flag, region, subregion, callingCodes, population, area} = countryDetails;

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
            .then((response) => response.json())
            .then(data => setCountryDetails(data))
    }, [alpha2Code]);
    return (
        <div className="countryContainer">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={flag}
                    />
                        <h2>{name}</h2>
                        <h4>{capital}</h4>
                        <p>Region: {region}</p>
                        <p>Sub-Region: {subregion}</p>
                         <p><small>Area: {area}</small></p>
                         <p><small>CallingCodes: {callingCodes}</small></p>
                         <p><small>Population: {population}</small></p>
                     
                </Figure>

        </div>
    );
};

export default CountryDetails;