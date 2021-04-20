import React, {useState, useEffect} from "react";
import getAll from "./services/restCountries";
import Countries from "./components/Countries";

function App() {
    const [newSearch, setNewSearch] = useState("");
    const [countries, setCountries] = useState([])

    const handleSearchChange=event=>{
      setNewSearch(event.target.value);
    };
    useEffect(()=>{
        getAll().then(response=>setCountries(response));
    },[])
    return (
        <div>

            <form>
                find countries<input value={newSearch} onChange={handleSearchChange}/>
            </form>
            <Countries countries={countries} newSearch={newSearch}/>
        </div>

    );
}

export default App;
