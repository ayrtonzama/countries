import axios from "axios"
export default function handler(name){
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}name/${name}?fullText=true`)
}