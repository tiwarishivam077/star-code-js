// localStorage api of browser is used to store user-specific data in user's local storage, and it makes the web-app
// faster as it's easy to fetch/set data from/in localStorage than using network calls.
// Also the data remains in the local storage even if the user logs out or even close the browser
// ==> data stays in the browser
//  the memory alloted to local storage is large compare to session storage and cookies.

//  localStorage store data in the form of key value pairs, both key and value being strings. but we store object
// as well in localStorage, if we directly pass object in localStorage, it becomes difficult to read later

// how to make custom functions to get set and remove data in local storage

const setLocalStorageData = (key, value) => {
  // value can be object or  string
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const removeLocalStorageData = (key) => {
  localStorage.removeItem(key);
};

const clearLocalStorageData = () => {
  localStorage.clear();
};
