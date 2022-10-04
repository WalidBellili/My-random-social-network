import { createContext, useState } from "react";

const friendsContext = createContext({});

const FriendsContextProvider = (props) => {
  const [friends, setFriends] = useState([]);

  const value = {
    friends: friends,
    setFriends: setFriends,
  };

  return (
    <friendsContext.Provider value={value}>
      {props.children}
    </friendsContext.Provider>
  );
};
export { FriendsContextProvider, friendsContext };
