import React, { createContext, useContext, useState } from 'react';

type UserContextType = {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
};

const UserContext = createContext<UserContextType>({
  username: '',
  email: '',
  setUsername: () => {},
  setEmail: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={{ username, email, setUsername, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};