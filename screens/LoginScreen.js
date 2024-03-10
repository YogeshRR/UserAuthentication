import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../components/util/http_request/CreateUser";

function LoginScreen() {
  const [isAuthenticating, setAuthenticating] = useState(false);
  async function loginUserHandler({ email, password }) {
    setAuthenticating(true);
    await loginUser(email, password);
    setAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Login a User..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginUserHandler} />;
}

export default LoginScreen;
