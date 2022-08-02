import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { createPost } from './model.ts'
import Feed from "./components/Feed"
import NewPost from "./components/NewPost"

const API_URL = "http://localhost:3000/api/v1/posts"

function App() {
  const [posts, setPosts] = useState([
    createPost({content: "Hello from React", createdAt: new Date()}),
    createPost({content: "Hello from Plasmic", createdAt: new Date()}),
  ])

  useEffect(() => {
    const init = async() => {
      let posts = await getPosts()
      setPosts(posts)
    }; init()
  }, [])

  const getPosts = async() => {
    // Make GET request to server to get all instances of posts
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  }

  const getPost = async(postLocation) => {
    // Make GET request to server to get 1 instance of post
    try {
      const response = await fetch(postLocation)
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  const onAddPost = async(_content) => {
    // Create post object
    let post = createPost({content: _content, createdAt: new Date()})
    // Make POST request to server
    try {
      const response = await fetch(API_URL, { 
      method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(post)
      })
      // Get server post location
      const postLocation = response.headers.get("Location")
      // Fetch post data from server
      const newPost = await getPost(postLocation)
      // Update Posts with last post server data
      setPosts([...posts, newPost])
    } catch (error) {
        console.log(error)
    }
  }

  const onDelete = async(_id) => {
    try {
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "DELETE"
      })
      const posts = await getPosts()
      setPosts(posts)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div >
      <Routes>
        <Route path="/" element={<Feed posts={posts} handleDelete={onDelete}/>} />
        <Route path="/post" element={<NewPost onAddPost={onAddPost}/>} />
      </Routes>
    </div>
  );
}

export default App;
