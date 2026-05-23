import axios from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true
})


export async function profile(){
     const response = await api.get("/profile");
     return response
}

export async function post(){
    const response = await api.get("/posts/me");
    return response  
}