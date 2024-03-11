import axios from "axios";
import react from "react";

const API_KEY = "AIzaSyDzDvP_vrOsDwrK2evVjzIeKvZ0v-JEtkg";
export async function authenticatedUser(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}
export function createUser(email, password) {
  return authenticatedUser("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticatedUser("signInWithPassword", email, password);
}
