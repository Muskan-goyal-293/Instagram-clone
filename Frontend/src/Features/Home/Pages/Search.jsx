import React, { useEffect, useState } from 'react'
import search from "../Api/searchApi";

function Search() {

    const [value , setValue] = useState("");

    const [users , setUsers] = useState([]);

    async function searchUser(){

        const response = await search(value);

        setUsers(response.data)
    }

    useEffect(()=>{

        searchUser()

    },[value])

    return (

        <main>

            <input
             type='text'
             placeholder='Search users...'
             value={value}
             onChange={(e)=>{
                setValue(e.target.value)
             }}
            />

            {
                users.map((user)=>{

                    return(

                        <div key={user._id}>

                            <h3>
                                {user.username}
                            </h3>

                        </div>
                    )
                })
            }

        </main>
    )
}

export default Search