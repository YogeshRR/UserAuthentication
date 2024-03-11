import { createContext, useState } from "react";

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
  }
  function logout(token) {
    setToken(null);
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
