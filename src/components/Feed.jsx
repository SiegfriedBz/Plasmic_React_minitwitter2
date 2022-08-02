import * as React from "react";
import { PlasmicFeed } from "./plasmic/copy_of_minitwitter/PlasmicFeed";
import Post from "./Post"
import moment from "moment"

function Feed_({posts, handleDelete, ...rest}, ref) {

  return <PlasmicFeed 
    root={{ ref }} {...rest} 
    postList={{
      children: posts.map(post => {
        return <Post id={post.id} handleDelete={handleDelete} timestamp={moment(post.createdAt).fromNow()}>{post.content}</Post>
      })
    }}

    />;
}

const Feed = React.forwardRef(Feed_);

export default Feed;
