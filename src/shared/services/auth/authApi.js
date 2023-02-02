import api from "../api";

export function signUp(body) {
  const response = api.post("/auth/sign-up", body);

  return response;
}
