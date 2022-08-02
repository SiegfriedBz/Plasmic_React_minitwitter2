import * as React from "react";
import { PlasmicPost } from "./plasmic/copy_of_minitwitter/PlasmicPost";

function Post_({ id, handleDelete, ...rest }, ref) {
  return <PlasmicPost 
    root={{ ref }} {...rest} 
    delBtn={{
      onClick: () => {handleDelete(id)}
    }}
    />;
}

const Post = React.forwardRef(Post_);

export default Post;
