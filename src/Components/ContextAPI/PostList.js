import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../Context/context";
import {client} from "../Shared/client";
import Post from './Post';

const PostList = () => {
  let { posts } = useContext(AppContext);

  return (
    <div>
      <h3>Available Posts</h3>
      {posts.map(post => (
        <Post key={post.id} post={post}/>
      ))
      }
    </div>
  );
};

export default PostList;