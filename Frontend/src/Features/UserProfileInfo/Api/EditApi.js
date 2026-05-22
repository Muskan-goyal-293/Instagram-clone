 import axios from "axios";
 const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true
 })

 const edit = async(bio , profile_image , isPrivate , hobbies)=>{
const  formData = new FormData();
formData.append("bio" , bio);
formData.append("profile_image" , profile_image);
formData.append("isPrivate" , isPrivate);
formData.append("hobbies",hobbies)
const response = await api.post("/edit" , formData)
return response
} 

export default edit