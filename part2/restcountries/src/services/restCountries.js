import axios from "axios"

const url = "https://restcountries.eu/rest/v2/all"

const getAll=async ()=>{
    const response = await axios.get(url);
    return response.data;
};

export default getAll;