import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const saveUserData = (data) => {
    setUserData(data);
  };

  const clearUserData = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, saveUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
