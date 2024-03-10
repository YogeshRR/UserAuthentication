import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../components/util/http_request/CreateUser";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setAuthenticating] = useState(false);
  async function loginUserHandler({ email, password }) {
    setAuthenticating(true);
    try {
      await loginUser(email, password);
    } catch {
      Alert.alert("Error", "Unable to login");
    }

    setAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Login a User..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginUserHandler} />;
}

export default LoginScreen;
