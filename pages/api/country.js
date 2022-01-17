import axios from "axios"
export default function handler(name){
    return axios.get("https://restcountries.com/v2/name/"+name+'?fullText=true')
}