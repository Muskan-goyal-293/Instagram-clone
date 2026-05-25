import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import LikeHook from "../Hooks/LikeHook";

function LikeButton({ postId }) {

  // custom hook
  const {result , likeFun } = LikeHook();

  // local ui state
  const [liked, setLiked] = useState(false);

  // like function
  async function handleLike(postId) {

    const response = await likeFun(postId);

    // api success
    if (response) {
      // toggle ui
      setLiked(!liked);
    }
  }

  return (
    <button
      style={{
        backgroundColor: liked ? "red" : "",
      }}
      className="like-btn"
      onClick={() => {
        handleLike(postId);
      }}
    >
      <FaHeart />
    </button>
  );
}

export default LikeButton;