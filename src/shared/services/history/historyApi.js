import api from "../api";

export function getHistory(token) {
  const response = api.get("/habits/history/daily", null, token);

  return response;
}
