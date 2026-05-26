import React, { useState } from 'react'
import { MdVideoLibrary } from "react-icons/md";
import "../Style/CreateReel.scss"
import ReelHook from '../Hook/ReelHook';
import { useNavigate } from 'react-router-dom';

function CreateReel() {

const [caption , setCaption] = useState("");
const [video , setVideo] = useState("");

const {error , result , loading , reelFun} = ReelHook();

const navigate = useNavigate();

async function formHandler(e){
    e.preventDefault();
    console.log(reelFun)
    const response = await reelFun(caption , video);
    if(!response){
        return;
    }

    navigate("/reels");
}

return (

    <main className='createReel'>

        <div className='createReelWrapper'>

            <form onSubmit={formHandler}>
                <label htmlFor="video">

                    <MdVideoLibrary />

                    <input
                     type='file'
                     hidden
                     id='video'
                     onChange={(e)=>{
                        setVideo(e.target.files[0])
                     }}
                    />

                </label>

                <input
                 type='text'
                 placeholder='Write caption...'
                 value={caption}
                 onChange={(e)=>{
                    setCaption(e.target.value)
                 }}
                />

                {result && <p className='result'>{result}</p>}

                {error && <p className='error'>{error}</p>}

                <button>
                    {loading ? "Loading..." : "Create Reel"}
                </button>

            </form>

        </div>

    </main>

  )
}

export default CreateReel