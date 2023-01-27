export default function useLocalStorage(key, value) {
  function getStoredData(key) {
    let storedData = JSON.parse(localStorage.getItem(key));
    return storedData ? storedData : [];
  }

  function setStoredData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return { getStoredData, setStoredData };
}
