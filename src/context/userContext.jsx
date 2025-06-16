import React, { createContext, useState } from "react";
import { useContext } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

const useUserContext = () => useContext(UserDataContext);
export { useUserContext };

export default UserContext;
