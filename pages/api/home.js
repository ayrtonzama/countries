import axios from "axios"
export default function handler(){
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}all?fields=name,population,region,capital,flag`)
}

export function getRegion(region){
    return axios.get(`https://restcountries.com/v2/continent/${region}`)
}