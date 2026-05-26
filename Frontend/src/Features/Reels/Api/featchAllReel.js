import axios from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true
})

export default async function fetchReelFun (){
    const response = await api.get("/get-reel");
    return response
}