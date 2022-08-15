import {useEffect, useState} from "react";
import {AppContext} from "./Context/context";
import AddPost from "./Components/ContextAPI/AddPost";
import PostList from "./Components/ContextAPI/PostList";
import {client} from "./Components/Shared/client";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await client.get('?_limit=10');
      setPosts(response.data);
    }
    catch (err) {
      return new Error(`Error Encountered! \n ${err.message}`)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_USER':
        setPosts([...posts, payload.newPost]);
        return;
      case 'REMOVE_POST':
        setPosts(posts.filter(post => post.id !== payload.postId));
        return;
      default:
        return;
    }
  }

  return (
    <div>
      <AppContext.Provider value={{posts, dispatchUserEvent}}>
        <AddPost />
        <PostList />
      </AppContext.Provider>
    </div>
  );
}

export default App;