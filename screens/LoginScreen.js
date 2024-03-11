import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../components/util/http_request/CreateUser";
import { Alert } from "react-native";
import { AuthContext } from "../components/store/Context_Provider";

function LoginScreen() {
  const [isAuthenticating, setAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginUserHandler({ email, password }) {
    setAuthenticating(true);
    try {
      const token = await loginUser(email, password);
      authContext.authenticate(token);
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
