import api from "../api";

export function createHabit(body, token) {
  const response = api.post("/habits", body, token);

  return response;
}
