import axios from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true
})

export default async function save (savePost){
  const  response = await api.post(`/save/${savePost}`);
  return response;
}
