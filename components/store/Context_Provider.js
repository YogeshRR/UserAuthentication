import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: (token) => {},
});

function AuthenticationProvider({ children }) {
  const [isToken, setToken] = useState();

  function authenticate(token) {
    setToken(token);
    AsyncStorage.setItem("token", token);
  }
  function logout(token) {
    setToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: isToken,
    isAuthenticated: !!isToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthenticationProvider;
