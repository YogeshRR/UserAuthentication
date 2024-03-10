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

  console.log(response);
}
export async function createUser(email, password) {
  await authenticatedUser("signUp", email, password);
}

export async function loginUser(email, password) {
  await authenticatedUser("signInWithPassword", email, password);
}
