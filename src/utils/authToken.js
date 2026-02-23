let memToken = null;

export const setMemoryToken = (token) => { memToken = token };
export const getMemToken = () => memToken;
export const clearMemToken = () => { memToken = null };