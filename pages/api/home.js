import axios from "axios"
export default function handler(){
    return axios.get("https://restcountries.com/v2/all")
}