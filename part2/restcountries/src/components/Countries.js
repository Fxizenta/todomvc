import React from "react";
import Country from "./Country";

const Countries = ({countries, newSearch}) => {
    const show = event => {
        console.log(event.target.value);
        const cont = countries.filter(country =>
            country.name.includes(event.target.value))
    };

    const entries = countries.filter(country => country.name.toUpperCase().includes(newSearch.toUpperCase()))
    if (entries.length >= 10) {
        return <p>Too many matches, specify another filter</p>
    }
    return (
        <ul>
            {countries
                .filter(country =>
                    country.name.toUpperCase().includes(newSearch.toUpperCase())
                )
                .map(country => (
                    <Country
                        key={country.name}
                        name={country.name}
                        capital={country.capital}
                        population={country.population}
                        languages={country.languages}
                        flagUrl={country.flag}
                    />
            ))}
        </ul>
    );
}

export default Countries