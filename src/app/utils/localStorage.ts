export const saveLocalState = (key: string, state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem(key, serializedState);
  } catch (err) {
    console.info('Uh oh!', err);
  }
};

export const getLocalState = (item: string) => {
  try {
    const serializedState = window.localStorage.getItem(item);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
