import React, { createContext, useContext, useState } from 'react';

type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
};

const UserContext = createContext<UserContextType>({
  username: '',
  setUsername: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};