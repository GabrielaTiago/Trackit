import api from "../api";

export function getHabits(token) {
  const response = api.get("/habits", null, token);

  return response;
}

export function getTodayHabits(token) {
  const response = api.get("/habits/today", null, token);

  return response;
}

export function createHabit(body, token) {
  const response = api.post("/habits", body, token);

  return response;
}

export function deleteHabit(id, token) {
  const response = api.delete(`/habits/${id}`, null, token);

  return response;
}

export function checkHabit(id, token) {
  const response = api.post(`/habits/${id}/check`, null, token);

  return response;
}

export function uncheckHabit(id, token) {
  const response = api.post(`/habits/${id}/uncheck`, null, token);

  return response;
}
