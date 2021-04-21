import React from "react";

const Country = ({name,capital,population,languages,flagUrl}) => {
    if(population!=undefined) {
        return (
            <div>
                <h1>{name}</h1>
                <p>capital {capital}</p>
                <p>population {population}</p>
                <h3>languages</h3>
                <ul>
                    {languages.map(language => (
                        <li key={language.name}>{language.name}</li>
                    ))}
                </ul>
                <img src={flagUrl} alt="No flag found" height="250" width="350"/>
            </div>
        )
    }
    return(
        <div>
            {name}
        </div>
    )
}

export default Country;