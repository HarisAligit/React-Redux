import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../Context/context";
import {client} from "../Shared/client";
import Post from './Post';

const PostList = () => {
  let { posts } = useContext(AppContext);
  const [postList, setPostList] = useState(posts);

  const fetchPosts = async () => {
    try {
      const response = await client.get('?_limit=10');
      setPostList(response.data);
    }
    catch (err) {
      return new Error(`Error Encountered! \n ${err.message}`)
    }
  }

  useEffect(() => {
    console.log("\nFetch: \n", fetchPosts());
  }, [])

  return (
    <div>
      <h3>Available Posts</h3>
      {postList && postList.map(post => (
        <Post key={post.id} post={post}/>
      ))
      })}
    </div>
  );
};

export default PostList;