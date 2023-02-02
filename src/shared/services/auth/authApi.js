import api from "../api";

export function signUp(body) {
  const response = api.post("/auth/sign-up", body);

  return response;
}

export function signIn(body) {
    const response = api.post("/auth/login", body);
  
    return response;
  }
  