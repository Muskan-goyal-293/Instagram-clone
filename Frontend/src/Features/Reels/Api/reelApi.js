import axios from  "axios";
const api = axios.create({
    baseURL : "http://localhost:3000/api",
   withCredentials : true 
}) 


export default async function reelFunction(caption , reel){
    const formData = new FormData();
    formData.append("caption" , caption);
    formData.append("reel" , reel);
    const response = await api.post("/reel" , formData);
    console.log(response)
    return response
} 