import { useState } from "react";
import {
  authenticatedUser,
  createUser,
} from "../components/util/http_request/CreateUser";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setAuthenticating] = useState(false);
  async function createUserHandler({ email, password }) {
    setAuthenticating(true);
    await authenticatedUser(email, password);
    setAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating a User"} />;
  }

  return <AuthContent onAuthenticate={createUserHandler} />;
}

export default SignupScreen;
