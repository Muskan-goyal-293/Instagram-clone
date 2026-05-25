import axios from "axios";
const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials : true
})

export default async function like (postId){
    const response = await api.post(`/like/${postId}`);
    return response
}
