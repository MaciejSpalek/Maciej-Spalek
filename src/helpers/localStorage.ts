interface ISet {
  key: string;
  value: string | number | object;
}

export const ls = {
  get: (key: string) => {
    return JSON.parse(window.localStorage.getItem(key));
  },
  set: ({ key, value }: ISet) => {
    const storedValue = value instanceof Function ? value(key) : value;
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  },
  remove: (key: string) => {
    window.localStorage.removeItem(key);
  },
};
