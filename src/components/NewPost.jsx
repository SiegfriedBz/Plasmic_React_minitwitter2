import React, { useState } from "react";
import { PlasmicNewPost } from "./plasmic/copy_of_minitwitter/PlasmicNewPost";
import { useNavigate } from "react-router-dom"

function NewPost_({onAddPost, ...rest}, ref) {

  const [content, setContent] = useState("")
  let navigate = useNavigate()

  return <PlasmicNewPost 
    root={{ ref }} {...rest}
    postContent={{
      value: content,
      onChange: (e) => {setContent(e.target.value)}
    }}
    postButton={{
      onClick: () => {
        onAddPost(content)
        navigate("/")
        setContent("")
      }
    }}
    />;
}

const NewPost = React.forwardRef(NewPost_);

export default NewPost;
