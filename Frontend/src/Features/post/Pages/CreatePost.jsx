import React, { useState } from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import "../Style/createPost.scss"
import PostHook from '../Hook/PostHook';
function CreatePost() {
const[caption , setCaption]= useState("");
const[image , setImage] = useState("");
const{error, result, loading , postCreateFun} = PostHook();

async function formHandler(e){
    e.preventDefault();
    const result = await postCreateFun(caption , image);
    if(!result){
        return
    }
}


return (
    <main className='createPost'>
        <div className='createPostWrapper'>
            <form  onSubmit={(e)=>{
                formHandler(e)
            }}>
                <label htmlFor="image">
                    <MdAddPhotoAlternate />
                    <input type='file' hidden  name='image' id="image" onChange={(e)=>{
                        setImage(e.target.files[0])
                    }}></input>
                </label>
                <input type="text" placeholder='Caption'  value={caption} onChange={(e)=>{
                    setCaption(e.target.value)
                }} />
                {result && <p className="result">{result}</p>}
                {error && <p className ="error">{error}</p>}
                <button>{loading ? "Loading..." : "Create post"}</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost
