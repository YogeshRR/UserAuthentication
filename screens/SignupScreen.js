import { useState } from "react";
import {
  authenticatedUser,
  createUser,
} from "../components/util/http_request/CreateUser";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setAuthenticating] = useState(false);
  async function createUserHandler({ email, password }) {
    setAuthenticating(true);
    try {
      await authenticatedUser(email, password);
    } catch {
      Alert.alert("Error", "Unable to Signup");
    }

    setAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating a User"} />;
  }

  return <AuthContent onAuthenticate={createUserHandler} />;
}

export default SignupScreen;
