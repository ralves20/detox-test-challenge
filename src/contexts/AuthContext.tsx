import React, {createContext, useState, useContext} from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  username: string;
}

interface AuthContextProps {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as any);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string) => {
    setUser({username});
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
