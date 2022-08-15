import {useState} from "react";
import {AppContext} from "./Context/context";
import AddPost from "./Components/ContextAPI/AddPost";
import PostList from "./Components/ContextAPI/PostList";

const App = () => {
  const [users, setUsers] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_USER':
        setUsers([...users, payload.newUser]);
        return;
      case 'REMOVE_USER':
        setUsers(users.filter(user => user.id !== payload.userId));
        return;
      default:
        return;
    }
  }

  return (
    <div>
      <AppContext.Provider value={{users, dispatchUserEvent}}>
        <AddPost />
        <PostList />
      </AppContext.Provider>
    </div>
  );
}

export default App;