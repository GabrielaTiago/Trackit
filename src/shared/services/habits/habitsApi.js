import api from "../api";

export function getHabits(token) {
  const response = api.get("/habits", null, token);

  return response;
}

export function createHabit(body, token) {
  const response = api.post("/habits", body, token);

  return response;
}
