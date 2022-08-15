import {useState} from "react";
import {AppContext} from "./Context/context";
import AddUser from "./Components/ContextAPI/AddUser";
import UserList from "./Components/ContextAPI/UserList";

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
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;