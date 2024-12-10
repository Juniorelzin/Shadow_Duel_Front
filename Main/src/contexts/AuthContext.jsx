import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [idUsuario, setIdUsuario] = useState(localStorage.getItem("idUsuario"));
  

  const login = (jwtToken, idUsuario) => {
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("idUsuario", idUsuario);
    
  };

  const logout = () => {
    setToken(null);
    localStorage.clear();
  };

  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider value={{ token, idUsuario, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
