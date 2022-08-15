import {useState} from "react";
import {AppContext} from "./Context/context";
import AddPost from "./Components/ContextAPI/AddPost";
import PostList from "./Components/ContextAPI/PostList";

const App = () => {
  const [posts, setPosts] = useState([]);

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