export const storage = {
    get: (key) => localStorage.getItem(key),
    set: (key, value) => localStorage.setItem(key, value),
    clear: () => localStorage.clear(),
    remove: (...keys) => keys.forEach((key) => localStorage.removeItem(key)),
};
