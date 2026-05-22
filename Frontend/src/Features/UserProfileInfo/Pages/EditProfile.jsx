import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import "../Style/EditStyle.scss"
import EditHook from '../Hook/EditHook';

function EditProfile() {
const{error, loading , result , editFun ,setError , setResult}=  EditHook()     
const [bio , setBio]= useState("");
const[profile_image , setProfile_image] = useState("");
const[isPrivate ,setIsPrivate] = useState(Boolean);
const[hobbies , setHobbies] = useState("");

useEffect(()=>{
setError("");
setResult("")
},[])
async function formHandler(e){
    e.preventDefault();
  const result = await editFun(bio, profile_image, isPrivate, hobbies);
  if(!result){
    return
  }

 setBio("");
 setProfile_image("");
setIsPrivate(Boolean);
setHobbies("");

}
    return (
    <main className='edit'>
        <div className='editWrapper'>
            <form onSubmit={(e)=>{formHandler(e)}}>
                <div>
                    <label htmlFor="profile_image"><FaRegUserCircle/>
                        <input type="file" hidden onChange={(e)=>{
                            setProfile_image(e.target.files[0])
                        }} name='profile_image' id="profile_image" className='profile_image editInput ' />
                    </label>
                </div>
                <div>
                <label htmlFor="bio">Bio
                <input type="text" placeholder='bio' value={bio} onChange={(e)=>{setBio(e.target.value)}} name='bio' id='bio' className='bio editInput' />
                </label>
                </div>
                <div >
                    <label htmlFor="private"className="isPrivate" >
                        <input type="radio" name='isPrivate' value={"private"} onChange={()=>{setIsPrivate(true)}} id='private' className='private editInput ' />Private
                    </label>
                    <label htmlFor="public" className="isPrivate">
                        <input type="radio" name="isPrivate" id="public" className='public
                         value="public" editInput' onChange={()=>{setIsPrivate(false)}}  />Public
                    </label>
                </div>
                <div>
                    <label htmlFor="hobbies">Hobbies
                   <input type="text" value={hobbies} onChange={(e)=>setHobbies(e.target.value)} name='hobbies' id='hobbies' className='hobbies editInput' placeholder='Hobbies'  />
                    </label>
                </div>
                 {result && <p className='result'>{result}</p>}
                 {error && <p className='error'>{error}</p>}
                <button  >{loading ? "Loading..." : "Edit"}</button>
            </form>
        </div>

    </main>
  )
}

export default EditProfile
