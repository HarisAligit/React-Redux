import {useEffect, useState} from "react";
import {AppContext} from "./Context/context";
import AddPost from "./Components/ContextAPI/AddPost";
import PostList from "./Components/ContextAPI/PostList";
import {client} from "./Components/Shared/client";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(3);

  console.log("limit: ", limit);
  const fetchPosts = async () => {
    try {
      const response = await client.get(`?_limit=${limit}`);
      setPosts(response.data);
    }
    catch (err) {
      return new Error(`Error Encountered! \n ${err.message}`)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  const dispatchUserEvent = async (actionType, payload) => {
    switch (actionType) {
      case 'ADD_POST':
        setPosts([...posts, payload.newPost]);
        setLimit(payload.newLimit)
        return;
      case 'REMOVE_POST':
        try {
          await client.delete(`${payload.postId}`);
          setPosts(posts.filter(post => post.id !== payload.postId));
          return;
        }
        catch (err) {
          return new Error(`Delete Failed! \n ${err.message}`)
        }
      default:
        return;
    }
  }

  return (
    <div>
      <AppContext.Provider value={{posts, limit, dispatchUserEvent}}>
        <AddPost />
        <PostList />
      </AppContext.Provider>
    </div>
  );
}

export default App;