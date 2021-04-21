import React, {useState} from "react";
import Country from "./Country";

const Countries = ({countries, newSearch}) => {
    const [showCountry,setShowContry] = useState();

    const show = event => {
        console.log(event.target.value);
        const cont = countries.filter(country =>
            country.name.includes(event.target.value)
        );
        console.log("cont: ", cont);
        setShowContry(cont[0]);
    };


    const entries = countries.filter(country => country.name.toUpperCase().includes(newSearch.toUpperCase()))
    if (entries.length >= 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if(entries.length===1){
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

        )
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
                        //capital={country.capital}
                        //population={country.population}
                        //languages={country.languages}
                        //flagUrl={country.flag}
                    />
            ))}
        </ul>
    );
}

export default Countries