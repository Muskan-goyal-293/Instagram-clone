import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials:true
})

export default async function search(name){

    const response = await api.get(
        `/search?name=${name}`
    )

    return response.data;
}