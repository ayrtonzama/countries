import axios from "axios"
export  function getAllCountries(){
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}all?fields=name,population,region,capital,flag`)
}
export function getAllCountriesSearch(search){
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}name/${search}?fields=name,population,region,capital,flag`)

}
export function getRegion(region){
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL_V3}region/${region}?fields=name,population,region,capital,flags`)
}