import { createContext, useState } from "react";

const usersContext = createContext({});

const UsersContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const value = {
    user: user,
    setUser: setUser,
  };

  return (
    <usersContext.Provider value={value}>
      {props.children}
    </usersContext.Provider>
  );
};

export { UsersContextProvider, usersContext };
