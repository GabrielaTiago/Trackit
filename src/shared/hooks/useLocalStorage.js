export function useLocalStorage() {
  
  const setValueToLocalStorage = (key, defaultValue) =>
    localStorage.setItem(key, JSON.stringify(defaultValue));

  const getItemFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));

  const removeValue = (key) => window.localStorage.removeItem(key);

  return {
    setValueToLocalStorage,
    getItemFromLocalStorage,
    removeValue,
  };
}
