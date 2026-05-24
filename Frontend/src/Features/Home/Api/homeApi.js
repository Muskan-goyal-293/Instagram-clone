import axios from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true,
})


const home = async()=>{
     const response = await api.get("/home");
     return response
}
export default home