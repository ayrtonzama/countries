import axios from "axios"
export default function handler(){
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}all?fields=name,populations,region,capital,flag`)
}